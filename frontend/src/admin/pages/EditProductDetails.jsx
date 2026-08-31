import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../api/api";
import "../styles/editproductdetails.css";

function EditProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const addItem = (sectionIndex) => {
    const updated = [...sections];

    updated[sectionIndex].items.push({
      title: "",
      value: "",
      icon: "",
    });

    setSections(updated);
  };

  const updateItem = (sectionIndex, itemIndex, field, value) => {
    const updated = [...sections];

    updated[sectionIndex].items[itemIndex][field] = value;

    setSections(updated);
  };

  const removeItem = (sectionIndex, itemIndex) => {
    const updated = [...sections];

    updated[sectionIndex].items.splice(itemIndex, 1);

    setSections(updated);
  };
  const [sections, setSections] = useState([
    {
      title: "What's Included",
      items: [],
    },
    {
      title: "Fabric & Details",
      items: [],
    },
    {
      title: "Care Instructions",
      items: [],
    },
  ]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await API.get(`/products/${id}`);

        setProduct(data.product);

        if (
          data.product.productDetails &&
          data.product.productDetails.length > 0
        ) {
          setSections(data.product.productDetails);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const updateSectionTitle = (index, value) => {
    const updated = [...sections];
    updated[index].title = value;
    setSections(updated);
  };
  const saveProductDetails = async () => {
    try {
      setSaving(true);

      await API.put(`/products/${id}`, {
        productDetails: sections,
      });

      alert("Product details saved successfully!");
    } catch (error) {
      console.log(error);
      alert("Failed to save product details.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="edit-details-page">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <div className="edit-details-page">
      <div className="edit-details-header">
        <h1>Edit Product Details</h1>
        <p>Create and manage custom product detail sections.</p>
      </div>

      <div className="edit-product-card">
        <img
          src={
            product.images?.length
              ? product.images[0]
              : "/images/placeholder.jpg"
          }
          alt={product.name}
        />

        <div className="edit-product-info">
          <h2>{product.name}</h2>

          <p>₹{Number(product.price).toLocaleString("en-IN")}</p>

          <span>{product.category}</span>
        </div>
      </div>

      {sections.map((section, index) => (
        <div className="detail-section-card" key={index}>
          <h3>Section {index + 1}</h3>

          <input
            type="text"
            value={section.title}
            placeholder="Enter Section Title"
            onChange={(e) => updateSectionTitle(index, e.target.value)}
          />

          {section.items.length === 0 ? (
            <div className="section-items-placeholder">
              <p>No items added yet.</p>
            </div>
          ) : (
            section.items.map((item, itemIndex) => (
              <div className="detail-item-card" key={itemIndex}>
                <h4>Item {itemIndex + 1}</h4>

                <input
                  type="text"
                  placeholder="Title"
                  value={item.title}
                  onChange={(e) =>
                    updateItem(index, itemIndex, "title", e.target.value)
                  }
                />

                <input
                  type="text"
                  placeholder="Value"
                  value={item.value}
                  onChange={(e) =>
                    updateItem(index, itemIndex, "value", e.target.value)
                  }
                />

                <input
                  type="text"
                  placeholder="Icon (emoji)"
                  value={item.icon}
                  onChange={(e) =>
                    updateItem(index, itemIndex, "icon", e.target.value)
                  }
                />

                <button
                  className="remove-item-btn"
                  onClick={() => removeItem(index, itemIndex)}
                >
                  Remove Item
                </button>
              </div>
            ))
          )}

          <button className="add-item-btn" onClick={() => addItem(index)}>
            + Add Item
          </button>
        </div>
      ))}

      <div className="save-btn-wrapper">
        <button
          className="save-product-details-btn"
          onClick={saveProductDetails}
          disabled={saving}
        >
          {saving ? "Saving..." : "Save Product Details"}
        </button>
      </div>
    </div>
  );
}

export default EditProductDetails;
