import "../styles/dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">

      <aside className="sidebar">

        <div className="logo">
          <h2>Jaipuri</h2>
          <span>Collections</span>
        </div>

        <ul>
          <li className="active">Dashboard</li>
          <li>Products</li>
          <li>Collections</li>
          <li>Orders</li>
          <li>Customers</li>
          <li>Reviews</li>
          <li>Settings</li>
        </ul>

      </aside>

      <main className="content">

        <div className="topbar">
          <h1>Dashboard</h1>

          <button className="logout">
            Logout
          </button>
        </div>

        <div className="cards">

          <div className="card">
            <h3>Total Products</h3>
            <h2>128</h2>
          </div>

          <div className="card">
            <h3>Total Orders</h3>
            <h2>46</h2>
          </div>

          <div className="card">
            <h3>Revenue</h3>
            <h2>₹2,45,000</h2>
          </div>

          <div className="card">
            <h3>Customers</h3>
            <h2>319</h2>
          </div>

        </div>

        <div className="recent-orders">

          <h2>Recent Orders</h2>

          <table>

            <thead>
              <tr>
                <th>Order</th>
                <th>Customer</th>
                <th>Total</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>#1001</td>
                <td>Madhav</td>
                <td>₹4,250</td>
                <td><span className="status delivered">Delivered</span></td>
              </tr>

              <tr>
                <td>#1002</td>
                <td>Riya</td>
                <td>₹2,800</td>
                <td><span className="status pending">Pending</span></td>
              </tr>

              <tr>
                <td>#1003</td>
                <td>Neha</td>
                <td>₹6,100</td>
                <td><span className="status shipped">Shipped</span></td>
              </tr>

            </tbody>

          </table>

        </div>

      </main>

    </div>
  );
};

export default Dashboard;