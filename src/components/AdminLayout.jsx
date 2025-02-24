import { useState, useEffect } from "react"
import { Outlet, NavLink, useLocation } from "react-router-dom"
import { motion } from "framer-motion"

export default function AdminLayout() {
  const location = useLocation()
  const [indicatorY, setIndicatorY] = useState(0)

  useEffect(() => {
    const activeLink = document.querySelector(".active-link")
    if (activeLink) {
      const parent = activeLink.closest("nav")
      const rect = activeLink.getBoundingClientRect()
      const parentRect = parent.getBoundingClientRect()
      const centerY = rect.top - parentRect.top + rect.height / 2

      setIndicatorY(centerY)
    }
  }, [location.pathname])

  return (
    <div className="grid grid-cols-6 bg-[#f5f5f5] min-h-screen">
      <aside className="col-span-1 p-4 whitespace-nowrap">
        <h2 className="text-xs">Admin Panel</h2>
        <nav className="mt-4 relative">
          <motion.div
            className="absolute left-0 w-[3px] bg-blue-600 rounded-full z-10"
            layoutId="activeIndicator"
            initial={false}
            animate={{ top: indicatorY - 8, height: "16px" }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          />

          <ul className="text-sm flex flex-col gap-1 relative">
            {[
              { path: "/admin", label: "Quản lý chung" },
              { path: "/admin/customers", label: "Quản lý khách hàng" },
              { path: "/admin/quanlyscaigithibovao", label: "Quản lý gì đó" },
            ].map((item) => (
              <li key={item.path} className="relative max-w-[280px]">
                <NavLink
                  to={item.path}
                  end={item.path === "/admin"}
                  className={({ isActive }) =>
                    `relative block w-full rounded pt-[9px] pb-[7px] pl-[16px] hover:bg-[#EAEAEA] ${
                      isActive
                        ? "bg-[#EAEAEA] active-link"
                        : ""
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      <div className="col-span-1"></div>
      <main className="col-span-3">
        <Outlet />
      </main>
      <div className="col-span-1"></div>
    </div>
  )
}
