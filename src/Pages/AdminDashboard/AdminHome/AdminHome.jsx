import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/UseAuth";
import useAxiosSecure from "../../../Hooks/UseAxiosSecure";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { FaMoneyCheck, FaProductHunt, FaTruck, FaUser } from "react-icons/fa";
import { PieChart, Pie, } from "recharts";
import "./AdminHome.css";

const AdminHome = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const { data: stats = {} } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure("/admin-stats");
      return res.data;
    },
  });

  // load chart data
  const { data: chartData = [] } = useQuery({
    queryKey: ["chart-data"],
    queryFn: async () => {
      const res = await axiosSecure("/order-stats");
      return res.data;
    },
  });

  // barchart
  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
${x + width / 2}, ${y}
C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  // pie chart
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="p-6">
      <h1 className="text-4xl mt-4 md:mt-0 font-semibold">
        Welcome Back! {user.displayName}
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
        <div className="flex items-center gap-4 revenue p-8">
          <FaMoneyCheck className="text-white lg:text-5xl" />
          <div>
            <p className="text-3xl md:text-4xl text-white font-bold ">
              ${stats.revenue}
            </p>
            <p className="text-xl md:text-3xl text-white font-semibold ">
              Revenue
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4 costumers p-8">
          <FaUser />
          <div>
            <p className="text-3xl md:text-4xl text-white font-bold ">
              {stats.users}
            </p>
            <p className="text-xl md:text-3xl text-white font-semibold ">
              Costumers
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4 products p-8">
          <FaProductHunt className="text-white lg:text-7xl" />
          <div>
            <p className="text-3xl md:text-4xl text-white font-bold ">
              {stats.products}
            </p>
            <p className="text-xl md:text-3xl text-white font-semibold ">
              Products
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4 orders p-8">
          <FaTruck className="text-white lg:text-5xl" />
          <div>
            <p className="text-3xl md:text-4xl text-white font-bold ">
              {stats.orders}
            </p>
            <p className="text-xl md:text-3xl text-white font-semibold ">
              Orders
            </p>
          </div>
        </div>
      </div>
      <div className="md:flex mt-12 lg:mt-32">
        <div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={chartData}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis />
              <Bar
                dataKey="total"
                fill="#8884d8"
                shape={<TriangleBar />}
                label={{ position: "top" }}
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                fill="#8884d8"
                dataKey="count"
              >
                {chartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
