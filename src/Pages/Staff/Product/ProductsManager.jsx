import React, { useState, useEffect } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Grid,
  IconButton,
  Card,
  CardContent,
  Chip,
  Tooltip,
  Divider,
  TablePagination,
} from "@mui/material";
import {
  Add as AddIcon,
  Delete as DeleteIcon,
  Visibility as VisibilityIcon,
  Edit as EditIcon,
  ArrowBack as ArrowBackIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import "./ProductsManager.css";

import initialProducts from "../../../../mock/mockProduct";

const ProductsManager = () => {
  const [products, setProducts] = useState(initialProducts);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [openDetail, setOpenDetail] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);
  const navigate = useNavigate();

  // Pagination states
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleOpenDetail = (product) => {
    setSelectedProduct(product);
    setOpenDetail(true);
  };

  const handleCloseDetail = () => {
    setOpenDetail(false);
    setSelectedProduct(null);
  };

  const handleOpenDelete = (product, event) => {
    // Stop event propagation to prevent the row click event from firing
    if (event) {
      event.stopPropagation();
    }
    setProductToDelete(product);
    setOpenDelete(true);
  };

  const handleCloseDelete = () => {
    setOpenDelete(false);
    setProductToDelete(null);
  };

  const handleDeleteProduct = () => {
    setProducts(products.filter((p) => p.id !== productToDelete.id));
    handleCloseDelete();
  };

  const handleCreateProduct = () => {
    navigate("/products/create");
  };

  const handleEditProduct = (productId, event) => {
    // Stop event propagation to prevent the row click event from firing
    if (event) {
      event.stopPropagation();
    }
    navigate(`/products/edit/${productId}`);
  };

  // Pagination handlers
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  
  // Helper function to get row background color based on inventory status
  const getRowBackgroundColor = (quantity) => {
    if (quantity === 0) {
      return "rgba(231, 138, 138, 0.85)"; // Đỏ - Hết hàng
    } else if (quantity > 0 && quantity <= 5) {
      return "rgba(238, 238, 115, 0.66)"; // Vàng - Sắp hết hàng
    } else if (quantity > 5) {
      return "rgba(147, 231, 139, 0.63)"; // Xanh lá - Còn nhiều hàng
    }
    return "";
  };

  // Calculate current page data
  const currentProducts = products.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  // Handler for row click
  const handleRowClick = (product) => {
    handleOpenDetail(product);
  };

  return (
    <div className="product-manager">
      <Card className="header-card">
        <CardContent>
          <div className="header-content">
            <Typography variant="h5" component="div" className="page-title">
              Quản lý sản phẩm
            </Typography>
            <Button
              variant="contained"
              color="primary"
              className="create-btn"
              startIcon={<AddIcon />}
              onClick={handleCreateProduct}
            >
              Tạo sản phẩm mới
            </Button>
          </div>
        </CardContent>
      </Card>

      <TableContainer component={Paper} className="product-table">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">ID</TableCell>
              <TableCell>Tên sản phẩm</TableCell>
              <TableCell>Mô tả</TableCell>
              <TableCell align="right">Giá</TableCell>
              <TableCell align="center">Số lượng</TableCell>
              <TableCell align="center">Hành động</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentProducts.map((product) => {
              return (
                <TableRow
                  key={product.id}
                  className="product-row"
                  style={{
                    backgroundColor: getRowBackgroundColor(product.quantity),
                    borderRadius: "20px",
                    cursor: "pointer"
                  }}
                  onClick={() => handleRowClick(product)}
                >
                  <TableCell align="center">{product.id} </TableCell>
                  <TableCell className="product-name">{product.name}</TableCell>
                  <TableCell className="product-description">
                    {product.description}
                  </TableCell>
                  <TableCell align="right" className="product-price">
                    {product.price}
                  </TableCell>
                  <TableCell align="center">{product.quantity}</TableCell>

                  <TableCell align="center" onClick={(e) => e.stopPropagation()}>
                    <div className="action-buttons">
                      <Tooltip title="Chỉnh sửa">
                        <IconButton
                          onClick={(e) => handleEditProduct(product.id, e)}
                          color="primary"
                          size="small"
                        >
                          <EditIcon />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Xóa">
                        <IconButton
                          onClick={(e) => handleOpenDelete(product, e)}
                          color="error"
                          size="small"
                        >
                          <DeleteIcon />
                        </IconButton>
                      </Tooltip>
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[10, 25, 50]}
          component="div"
          count={products.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          labelRowsPerPage="Số hàng mỗi trang:"
          labelDisplayedRows={({ from, to, count }) =>
            `${from}-${to} của ${count}`
          }
        />
      </TableContainer>

      {/* Dialog chi tiết sản phẩm */}
      <Dialog
        open={openDetail}
        onClose={handleCloseDetail}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle className="detail-dialog-title">
          Chi tiết sản phẩm
          <IconButton
            aria-label="close"
            onClick={handleCloseDetail}
            sx={{ position: "absolute", right: 8, top: 8 }}
          >
            <ArrowBackIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          {selectedProduct && (
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Card className="product-images-card">
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Hình ảnh sản phẩm
                    </Typography>
                    <Grid container spacing={1} className="image-gallery">
                      {selectedProduct.images.map((image, index) => (
                        <Grid item key={index} xs={6}>
                          <img
                            src={image}
                            alt={`${selectedProduct.name} ${index + 1}`}
                            className="product-image"
                          />
                        </Grid>
                      ))}
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={6}>
                <Card className="product-info-card">
                  <CardContent>
                    <Typography
                      variant="h5"
                      gutterBottom
                      className="product-title"
                    >
                      {selectedProduct.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      className="product-quantity"
                      style={{ marginLeft: "10px", display: "inline-block" }}
                    >
                      Số lượng: {selectedProduct.quantity || 0}
                    </Typography>
                    <Typography
                      variant="h6"
                      color="primary"
                      className="product-price-detail"
                    >
                      {selectedProduct.price}
                    </Typography>
                    <Typography
                      variant="body1"
                      paragraph
                      className="product-description-detail"
                    >
                      {selectedProduct.description}
                    </Typography>

                    <Divider className="divider" />

                    <Typography variant="h6" gutterBottom>
                      Thông số chi tiết
                    </Typography>
                    <div className="product-details-list">
                      {selectedProduct.details && selectedProduct.details.map((detail, index) => (
                        <div key={index} className="detail-item">
                          <Typography
                            variant="subtitle2"
                            className="detail-label"
                          >
                            {detail.label}:
                          </Typography>
                          <Typography variant="body2" className="detail-value">
                            {detail.value}
                          </Typography>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          )}
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => handleEditProduct(selectedProduct?.id)}
            color="primary"
            variant="outlined"
            startIcon={<EditIcon />}
          >
            Chỉnh sửa
          </Button>
          <Button
            onClick={handleCloseDetail}
            color="secondary"
            variant="contained"
          >
            Đóng
          </Button>
        </DialogActions>
      </Dialog>

      {/* Dialog xác nhận xóa */}
      <Dialog open={openDelete} onClose={handleCloseDelete}>
        <DialogTitle>Xác nhận xóa sản phẩm</DialogTitle>
        <DialogContent>
          <Typography>
            Bạn có chắc chắn muốn xóa sản phẩm "{productToDelete?.name}"?
          </Typography>
          <Typography variant="body2" color="error" style={{ marginTop: 10 }}>
            Lưu ý: Hành động này không thể hoàn tác.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleCloseDelete}
            color="primary"
            variant="outlined"
          >
            Hủy
          </Button>
          <Button
            onClick={handleDeleteProduct}
            color="error"
            variant="contained"
            startIcon={<DeleteIcon />}
          >
            Xóa
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ProductsManager;