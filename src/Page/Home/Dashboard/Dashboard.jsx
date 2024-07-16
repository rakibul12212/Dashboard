import DashboardAreaChartSection from "./DashboardAreaChartSection";
import DashboardEarningSection from "./DashboardEarningSection";
import DashboardOverviewSection from "./DashboardOverviewSection";
import DashboardTrafficSection from "./DashboardTrafficSection";

const Dashboard = () => {
  return (
    <div className="bg-slate-800 text-white p-4">
      <div className="flex">
        <div>
          <div className="flex  items-center gap-4">
            <DashboardOverviewSection />
            <DashboardAreaChartSection />
          </div>
          <div>
            <DashboardEarningSection />
          </div>
        </div>
        <div className="mx-4">
          <DashboardTrafficSection />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
