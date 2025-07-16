import { Formik, Form, Field } from "formik";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import type { Category } from "../../types";

const AddProductSchema = Yup.object().shape({
  title: Yup.string().required("Required").min(3, "Too Short!"),
  price: Yup.number().positive("Must be positive").required("Required"),
  description: Yup.string().required("Required").min(3, "Too Short!"),
  category: Yup.number().positive("Must be positive").required("Required"),
  image: Yup.string().required("Required").min(3, "Too Short!"),
});

interface ProductCategoryDto {
  title: string;
  price: number;
  description: string;
  categoryId: number;
  images: string[];
}

const CreateProduct = () => {
  const [message, setMessage] = useState("");
  const [categories, setCategories] = useState<Category[]>([]);

  async function fetchCategories() {
    const res = await fetch("https://api.escuelajs.co/api/v1/categories");
    const categoriesRes = await res.json();
    setCategories(categoriesRes);
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  async function fetchAddProduct(newProduct: ProductCategoryDto) {
    const res = await fetch("https://api.escuelajs.co/api/v1/products/", {
      method: "POST",
      headers: { "Content-Type": "Application/JSON" },
      body: JSON.stringify(newProduct),
    });
    if (res.status == 201) {
      setMessage("Successfully added new product");
    }
  }

  return (
    <div>
      <h1>Add product</h1>
      {message ? <div>{message}</div> : null}
      <Formik
        initialValues={{
          title: "",
          price: "0",
          description: "",
          category: "1",
          image: "",
        }}
        validationSchema={AddProductSchema}
        onSubmit={(values) => {
          const { title, price, description, category, image } = values;
          const newProduct: ProductCategoryDto = {
            title,
            price: Number(price),
            description,
            categoryId: Number(category),
            images: [image],
          };
          // same shape as initial values
          console.log(values);
          fetchAddProduct(newProduct);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <label>Title:</label>
            <Field name="title" />
            {errors.title && touched.title ? <div>{errors.title}</div> : null}

            <label>Price:</label>
            <Field name="price" />
            {errors.price && touched.price ? <div>{errors.price}</div> : null}

            <label>Description:</label>
            <Field name="description" />
            {errors.description && touched.description ? (
              <div>{errors.description}</div>
            ) : null}

            <label>Category id:</label>
            <Field name="category" as="select">
              {/* <option value="1">Electronics</option>
              <option value="2">Clothes</option> */}
              {categories.map((c) => (
                <option value={c.id}>{c.name}</option>
              ))}
            </Field>
            {errors.category && touched.category ? (
              <div>{errors.category}</div>
            ) : null}

            <label>Image:</label>
            <Field name="image" />
            {errors.image && touched.image ? <div>{errors.image}</div> : null}

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreateProduct;
