import React from "react";
import { Divider, Card, Button, Modal, Box, TextField } from "@mui/material";

import Grid from "@mui/material/Grid";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";

import CartItems from "./CartItems";
import AddressCard from "./AddressCard";

import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  outline: "none",
  boxShadow: 24,
  p: 4,
};

const initialValues = {
  streetAddress: "",
  state: "",
  pincode: "",
  city: "",
};

// const validationSchema = Yup.object.shape({
//   streetAddress: Yup.string().required("Street Address is Requried!"),

//   state: Yup.string().required("State is Required!"),

//   pincode: Yup.required("PinCode is Required!"),

//   city: Yup.string().required("City is Required!"),
// });

const items = [1, 1];

const Cart = () => {
  // ✅ Hooks INSIDE component
  const [open, setOpen] = React.useState(false);

  const handleOpenAddressModal = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = (values) => {
    console.log("FOrm values", values);
  };

  const createOrderUsingSelectAddress = () => {};

  return (
    <>
      <main className="lg:flex justify-between">
        {/* LEFT SECTION */}
        <section className="lg:w-[30%] space-y-6 lg:min-h-screen pt-10">
          {items.map((item, index) => (
            <CartItems key={index} />
          ))}

          <Divider />

          <div className="billsDetails px-5 text-sm">
            <p className="font-extralight py-5">Bill Details</p>

            <div className="space-y-3">
              <div className="flex justify-between text-gray-400">
                <p>Item Total</p>
                <p>₹200</p>
              </div>

              <div className="flex justify-between text-gray-400">
                <p>Delivery Charge</p>
                <p>₹20</p>
              </div>

              <div className="flex justify-between text-gray-400">
                <p>GST & Restaurant Charges</p>
                <p>₹200</p>
              </div>

              <Divider />
            </div>

            <div className="flex justify-between text-gray-600 font-semibold pt-3">
              <p>Total Pay</p>
              <p>₹420</p>
            </div>
          </div>
        </section>

        <Divider orientation="vertical" flexItem />

        {/* RIGHT SECTION */}
        <section className="lg:w-[70%] flex justify-center px-5 pb-10">
          <div>
            <h1 className="text-center font-semibold text-2xl py-10">
              Choose Delivery Address
            </h1>

            <div className="flex gap-5 flex-wrap justify-center">
              {[1, 1, 1, 1, 1].map((item, index) => (
                <AddressCard
                  key={index}
                  handleSelectAddress={createOrderUsingSelectAddress}
                  item={item}
                  showButton={true}
                />
              ))}

              <Card className="flex gap-5 w-64 p-5">
                <AddLocationAltIcon />
                <div className="space-y-3 text-gray-500">
                  <h1 className="font-semibold text-lg ">Add New Address</h1>

                  <Button
                    variant="outlined"
                    fullWidth
                    onClick={handleOpenAddressModal}
                  >
                    Add
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* MODAL */}
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <h2>Add New Address</h2>
          {/* Add your address form here */}

          <Formik
            initialValues={initialValues}
            // validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <Form>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Field
                      as={TextField}
                      name="streetAddress"
                      label="Street Address"
                      fullWidth
                      error={touched.streetAddress && !!errors.streetAddress}
                      helperText={
                        <ErrorMessage
                          name="streetAddress"
                          component="span"
                          className="text-red-600"
                        />
                      }
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Field
                      as={TextField}
                      name="city"
                      label="City"
                      fullWidth
                      // error={touched.city && !!errors.city}
                      // helperText={<ErrorMessage name="city" />}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Field
                      as={TextField}
                      name="state"
                      label="State"
                      fullWidth
                      // error={touched.state && !!errors.state}
                      // helperText={<ErrorMessage name="state" />}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Field
                      as={TextField}
                      name="pincode"
                      label="Pincode"
                      fullWidth
                      // error={touched.pincode && !!errors.pincode}
                      // helperText={<ErrorMessage name="pincode" />}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      fullWidth
                    >
                      Deliver Here
                    </Button>
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </Box>
      </Modal>
    </>
  );
};

export default Cart;
