
import {  Car, Clock, Bell, Settings,  Home, Shield, Map, BarChart, Lock } from "lucide-react"


export default function DashboardLayout({ children }: { children: React.ReactNode }) {


  const routes = [
    {
      to: "/dashboard",
      label: "Dashboard",
      icon: Home,
      active: location.pathname === "/dashboard",
    },
    {
      to: "/dashboard/vehicles",
      label: "Vehicles",
      icon: Car,
      active: location.pathname === "/dashboard/vehicles",
    },
    {
      to: "/dashboard/tracking",
      label: "Live Tracking",
      icon: Map,
      active: location.pathname === "/dashboard/tracking",
    },
    {
      to: "/dashboard/history",
      label: "Trip History",
      icon: Clock,
      active: location.pathname === "/dashboard/history",
    },
    {
      to: "/dashboard/geofencing",
      label: "Geofencing",
      icon: Shield,
      active: location.pathname === "/dashboard/geofencing",
    },
    {
      to: "/dashboard/immobilization",
      label: "Immobilization",
      icon: Lock,
      active: location.pathname === "/dashboard/immobilization",
    },
    {
      to: "/dashboard/alerts",
      label: "Alerts",
      icon: Bell,
      active: location.pathname === "/dashboard/alerts",
    },
    {
      to: "/dashboard/statistics",
      label: "Statistics",
      icon: BarChart,
      active: location.pathname === "/dashboard/statistics",
    },
    {
      to: "/dashboard/settings",
      label: "Settings",
      icon: Settings,
      active: location.pathname === "/dashboard/settings",
    },
  ]

  return (
    <div></div>
  )
}
