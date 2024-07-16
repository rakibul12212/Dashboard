import Chart from "../../../Component/Ui/Chart/Chart";
import Traffic from "../Traffic/Traffic";

const Dashboard = () => {
  return (
    <div>
      <div className="flex  bg-slate-800 text-white">
        <div className="">
          <div className="p-4">
            <div className="pb-4">
              <p className="font-bold">Dashboard</p>
              <p className="text-sm">Overview of Latest Month</p>
            </div>
            <div>
              <p className="text-2xl">$6468.96</p>
              <p className="text-sm">Current Month Earnings</p>
            </div>
            <div className="py-4">
              <p className="text-2xl">82</p>
              <p className="text-sm">Current Month Sales</p>
            </div>
            <button className="bg-gradient-to-r from-pink-500 to-orange-300 text-white text-xs  py-2 px-4 rounded-full">
              Last Month Summary
            </button>
          </div>
        </div>

        <div id="line-chart-container" className="p-4">
          <div className="flex">
            <div>
              <div id="line-chart-heading" className="flex justify-around mb-4">
                <div id="chart-heading-left">
                  <div className="flex justify-around gap-x-4">
                    <p className="hover:text-green-500 hover:border-b-2 hover:border-green-500 cursor-pointer">
                      Daily
                    </p>
                    <p className="hover:text-green-500 hover:border-b-2 hover:border-green-500 cursor-pointer">
                      Weekly
                    </p>
                    <p className="hover:text-green-500 hover:border-b-2 hover:border-green-500 cursor-pointer">
                      Monthly
                    </p>
                    <p className="hover:text-green-500 hover:border-b-2 hover:border-green-500 cursor-pointer">
                      Yearly
                    </p>
                  </div>
                </div>
                <div
                  id="chart-heading-right"
                  className="flex justify-around gap-x-4"
                >
                  <p>Online</p>
                  <p>Store</p>
                </div>
              </div>
              <Chart />
              <div className="mt-4 bg-slate-800 text-white p-4 flex justify-around">
                <div className="flex  items-center gap-x-4">
                  <div className="bg-pink-500 p-3 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-wallet"
                    >
                      <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
                      <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
                    </svg>
                  </div>
                  <div>
                    <p>Wallet Balance</p>
                    <p>$3,567.80</p>
                  </div>
                </div>
                <div className="flex  items-center gap-x-4">
                  <div className="bg-purple-500 p-3 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-wallet"
                    >
                      <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
                      <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
                    </svg>
                  </div>
                  <div>
                    <p>Referal Erning</p>
                    <p>$1,589.53</p>
                  </div>
                </div>
                <div className="flex  items-center gap-x-4">
                  <div className="bg-purple-500 p-3 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3"
                      />
                    </svg>
                  </div>
                  <div>
                    <p>Estimate Sale</p>
                    <p>$2,651.50</p>
                  </div>
                </div>
                <div className="flex  items-center gap-x-4">
                  <div className="bg-sky-500 p-3 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3"
                      />
                    </svg>
                  </div>
                  <div>
                    <p>Earning</p>
                    <p>$53,567.54 </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <Traffic />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
