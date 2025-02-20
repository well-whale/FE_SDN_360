import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Check from "@mui/icons-material/Check";
import SettingsIcon from "@mui/icons-material/Settings";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import VideoLabelIcon from "@mui/icons-material/VideoLabel";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import { useParams, useNavigate } from "react-router-dom";
import getMockOrders from "../../../mock/mockOrder";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AodIcon from "@mui/icons-material/Aod";
import CoPresentIcon from "@mui/icons-material/CoPresent";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import CancelIcon from "@mui/icons-material/Cancel";
import Button from "@mui/material/Button";

const QontoStepIconRoot = styled("div")(({ theme }) => ({
  color: "#eaeaf0",
  display: "flex",
  height: 22,
  alignItems: "center",
  "& .QontoStepIcon-completedIcon": {
    color: "#784af4",
    zIndex: 1,
    fontSize: 18,
  },
  "& .QontoStepIcon-circle": {
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: "currentColor",
  },
  ...theme.applyStyles("dark", {
    color: theme.palette.grey[700],
  }),
  variants: [
    {
      props: ({ ownerState }) => ownerState.active,
      style: {
        color: "#784af4",
      },
    },
  ],
}));

function QontoStepIcon(props) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <Check className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(207, 160, 206) 100%)",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(252, 232, 251) 100%)",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor: "#eaeaf0",
    borderRadius: 1,
    ...theme.applyStyles("dark", {
      backgroundColor: theme.palette.grey[800],
    }),
  },
}));

const ColorlibStepIconRoot = styled("div")(({ theme }) => ({
  backgroundColor: "#ccc",
  zIndex: 1,
  color: "#fff",
  width: 50,
  height: 50,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...theme.applyStyles("dark", {
    backgroundColor: theme.palette.grey[700],
  }),
  variants: [
    {
      props: ({ ownerState }) => ownerState.active,
      style: {
        backgroundColor: " rgb(242,113,33)",
        boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
      },
    },
    {
      props: ({ ownerState }) => ownerState.completed,
      style: {
        backgroundColor: " rgb(242,113,33)",
      },
    },
  ],
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: <AodIcon />,
    2: <CoPresentIcon />,
    3: <LocalShippingIcon />,
    4: <TaskAltIcon />,
    5: <CancelIcon />,
  };

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

const steps = [
  "Đơn hàng đã đặt",
  "Đang xác nhận",
  "Đang vận chuyển",
  "Đã giao",
];
const cancelSteps = ["Đơn hàng đã đặt", "Đã hủy"];

export default function OrderDetail() {
  const { orderId } = useParams();
  const navigate = useNavigate();
  const orders = getMockOrders();
  const order = orders.find((order) => order.id === Number(orderId));

  console.log("orderId:", orderId);
  console.log("orders:", orders);
  console.log("order:", order);

  if (!order) {
    return <Typography>Order not found</Typography>;
  }

  const getStatusStep = (status) => {
    switch (status) {
      case "Đơn hàng đã đặt":
        return 0;
      case "CHỜ XÁC NHẬN":
        return 1;
      case "ĐANG VẬN CHUYỂN":
        return 2;
      case "ĐÃ GIAO":
        return 3;
      case "ĐÃ HỦY":
        return 1;
      default:
        return 0;
    }
  };

  const orderSteps = order.status === "ĐÃ HỦY" ? cancelSteps : steps;

  return (
    <Stack sx={{ width: "100%" }} spacing={4}>
      <div style={{display:"flex",justifyContent:"space-between"}}>
        <Button
          variant="outlined"
          sx={{ width: "100px" }}
          onClick={() => navigate(-1)}
        >
          Quay lại
        </Button>
        <Typography variant="body1" color="rgb(242,113,33)">
            Mã Đơn Hàng: {order.id}
        </Typography>
      </div>
      <Stepper
        alternativeLabel
        activeStep={getStatusStep(order.status)}
        connector={<ColorlibConnector />}
      >
        {orderSteps.map((label, index) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon} icon={index + 1}>
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box sx={{ p: 3 }}>
        <Typography variant="h6" className="store-name">
          {order.storeName}
        </Typography>
        {order.items.map((item, idx) => (
          <div className="order-content" key={idx}>
            <div className="order-content-left">
              <div className="order-details">
                <img
                  src={item.image}
                  alt={item.description}
                  className="order-img"
                />
                <div className="order-description">
                  <Typography variant="h7">{item.description}</Typography>
                  <Typography className="order-quantity">
                    x{item.quantity}
                  </Typography>
                </div>
              </div>
            </div>
            <div className="order-content-right">
              <Typography className="order-price">{item.price}</Typography>
            </div>
          </div>
        ))}
        <Typography className="order-total">
          Tổng tiền: <span className="order-total-value">{order.total}</span>
        </Typography>
      </Box>
    </Stack>
  );
}
