import { Link } from "react-router-dom";
import "../styles/dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard-overlay">
        <div className="dashboard-header">
          <div>
            <h1>Jaipuri Collections</h1>
            <p>Luxury Admin Dashboard</p>
          </div>

          <button className="logout-btn">Logout</button>
        </div>

        <div className="welcome-card">
          <h2>Welcome Back, Admin 👋</h2>
          <p>
            Manage your luxury collections, featured products, categories and
            website from one elegant dashboard.
          </p>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <h3>Total Products</h3>
            <h1>0</h1>
          </div>

          <div className="stat-card">
            <h3>Categories</h3>
            <h1>5</h1>
          </div>

          <div className="stat-card">
            <h3>Trending Items</h3>
            <h1>0</h1>
          </div>

          <div className="stat-card">
            <h3>Website Status</h3>
            <h1>Live</h1>
          </div>
        </div>

        <h2 className="section-title">Manage Collections</h2>

        <div className="module-grid">
          <Link to="/admin/products" className="module-card">
            <div className="icon">🛏️</div>
            <h3>Products</h3>
            <p>Add, edit and remove bedsheets, comforters, dohars and more.</p>
          </Link>

          <Link to="/admin/product-details" className="module-card">
            <div className="icon">📋</div>
            <h3>Product Details</h3>
            <p>
              Manage Set Includes, Product Details, Care Instructions and
              Materials.
            </p>
          </Link>

          <Link to="/admin/trending" className="module-card">
            <div className="icon">🔥</div>
            <h3>Trending</h3>
            <p>Select products that appear on the homepage.</p>
          </Link>

          <Link to="/admin/orders" className="module-card">
            <div className="icon">📦</div>
            <h3>Orders</h3>
            <p>View customer orders and manage deliveries.</p>
          </Link>

          <Link to="/admin/users" className="module-card">
            <div className="icon">👑</div>
            <h3>Customers</h3>
            <p>Manage registered customers and their information.</p>
          </Link>

          <Link to="/admin/settings" className="module-card">
            <div className="icon">⚙️</div>
            <h3>Settings</h3>
            <p>Website configuration and admin preferences.</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
