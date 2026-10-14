import "./AddressForm.css";

function AddressForm({ address, setAddress, onContinue, onClose }) {
  const handleChange = (e) => {
    const { name, value } = e.target;

    setAddress((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const requiredFields = [
      "phone",
      "fullName",
      "email",
      "pincode",
      "address",
      "locality",
      "city",
      "state",
    ];

    const isValid = requiredFields.every((field) =>
      address[field]?.trim()
    );

    if (!isValid) {
      alert("Please fill in all required fields.");
      return;
    }

    onContinue();
  };

  return (
    <div className="address-screen">
      <header className="address-header">
        <button
          type="button"
          className="address-back"
          onClick={onClose}
          aria-label="Close checkout"
        >
          ×
        </button>

        <div className="address-brand">
          <span>JAIPURI COLLECTIONS</span>
          <small>Address Details</small>
        </div>
      </header>

      <div className="address-promo">
        Complimentary delivery on your order
      </div>

      <form className="address-form" onSubmit={handleSubmit}>
        <div className="address-form-section">
          <h2>Contact Information</h2>

          <div className="address-form-field">
            <label htmlFor="phone">Mobile Number *</label>
            <input id="phone" name="phone" type="tel"
              value={address.phone} onChange={handleChange}
              placeholder="Enter mobile number" required />
          </div>

          <div className="address-form-field">
            <label htmlFor="fullName">Full Name *</label>
            <input id="fullName" name="fullName" type="text"
              value={address.fullName} onChange={handleChange}
              placeholder="Enter full name" required />
          </div>

          <div className="address-form-field">
            <label htmlFor="email">Email Address *</label>
            <input id="email" name="email" type="email"
              value={address.email} onChange={handleChange}
              placeholder="Enter email address" required />
          </div>
        </div>

        <div className="address-form-section">
          <h2>Delivery Address</h2>

          <div className="address-form-field">
            <label htmlFor="pincode">PIN Code *</label>
            <input id="pincode" name="pincode" type="text"
              inputMode="numeric" maxLength={6}
              value={address.pincode} onChange={handleChange}
              placeholder="6-digit PIN code" required />
          </div>

          <div className="address-form-field">
            <label htmlFor="address">Address *</label>
            <textarea id="address" name="address"
              value={address.address} onChange={handleChange}
              placeholder="House no., street, area" rows={2} required />
          </div>

          <div className="address-form-field">
            <label htmlFor="locality">Locality</label>
            <input id="locality" name="locality" type="text"
              value={address.locality} onChange={handleChange}
              placeholder="Locality or landmark" />
          </div>

          <div className="address-form-two-column">
            <div className="address-form-field">
              <label htmlFor="city">City *</label>
              <input id="city" name="city" type="text"
                value={address.city} onChange={handleChange}
                placeholder="City" required />
            </div>

            <div className="address-form-field">
              <label htmlFor="state">State *</label>
              <input id="state" name="state" type="text"
                value={address.state} onChange={handleChange}
                placeholder="State" required />
            </div>
          </div>

          <div className="address-form-field">
            <label htmlFor="addressType">Save address as</label>
            <select id="addressType" name="addressType"
              value={address.addressType} onChange={handleChange}>
              <option value="Home">Home</option>
              <option value="Work">Work</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <button className="address-continue-btn" type="submit">
          Save and Continue →
        </button>
      </form>
    </div>
  );
}

export default AddressForm;