import { useState } from "react";
import { useCart } from "../context/useCart";
import AddressForm from "../components/Checkout/AddressForm";
import OrderReview from "../components/Checkout/OrderReview";
import "../styles/checkout.css";

function Checkout() {
  const { cart } = useCart();

  const [showAddressForm, setShowAddressForm] = useState(true);
  const [address, setAddress] = useState(null);

  const [formAddress, setFormAddress] = useState({
    phone: "",
    fullName: "",
    email: "",
    pincode: "",
    address: "",
    locality: "",
    city: "",
    state: "",
    addressType: "Home",
  });

  const [paymentMethod, setPaymentMethod] = useState("upi");

  const handleSaveAddress = () => {
    setAddress({ ...formAddress });
    setShowAddressForm(false);
  };

  const handleEditAddress = () => {
    if (address) {
      setFormAddress({ ...address });
    }

    setShowAddressForm(true);
  };

  const handleCloseAddress = () => {
    setShowAddressForm(false);
  };

  return (
    <main className="checkout-page">
      <OrderReview
        cart={cart}
        address={address}
        onAddAddress={handleEditAddress}
        onEditAddress={handleEditAddress}
        paymentMethod={paymentMethod}
        setPaymentMethod={setPaymentMethod}
      />

      {showAddressForm && (
        <div className="address-overlay">
          <AddressForm
            address={formAddress}
            setAddress={setFormAddress}
            onContinue={handleSaveAddress}
            onClose={handleCloseAddress}
          />
        </div>
      )}
    </main>
  );
}

export default Checkout;