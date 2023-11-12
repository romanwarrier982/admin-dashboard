import React, { useEffect } from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductsByRoomId,
  getProductsByUserId,
} from "../../redux/actions/productAction";
import Avatar from "@mui/material/Avatar";
import { getReportByUserId } from "../../redux/actions/reportAction";
import ProductList from "../products/ProductList";
import Product from "../products/Product";

const ProfileCard = () => {
  const dispatch = useDispatch();

  const userProductList = useSelector((state) => state.products);
  const roomProductList = useSelector((state) => state.roomProducts);
  const auth = useSelector((state) => state.auth);
  const userReportList = useSelector((state) => state.reports);

  console.log("Profile:", auth);
  useEffect(() => {
    dispatch(getProductsByUserId(auth.id));
    dispatch(getProductsByRoomId(auth.userData.room_id));
    dispatch(getReportByUserId(auth.id));
  }, [dispatch]);

  console.log("User:", userProductList.length);
  console.log("Room:", roomProductList);
  console.log("Report:", userReportList);

  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        overflow: { xs: "auto", sm: "initial" },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          display: "block",
          width: "1px",
          bgcolor: "warning.300",
          left: "500px",
          top: "-24px",
          bottom: "-24px",
          "&::before": {
            top: "4px",
            content: '"vertical"',
            display: "block",
            position: "absolute",
            right: "0.5rem",
            color: "text.tertiary",
            fontSize: "sm",
            fontWeight: "lg",
          },
          "&::after": {
            top: "4px",
            content: '"horizontal"',
            display: "block",
            position: "absolute",
            left: "0.5rem",
            color: "text.tertiary",
            fontSize: "sm",
            fontWeight: "lg",
          },
        }}
      />
      <Card
        orientation="horizontal"
        sx={{
          width: "100%",
          flexWrap: "wrap",
          [`& > *`]: {
            "--stack-point": "500px",
            minWidth:
              "clamp(0px, (calc(var(--stack-point) - 2 * var(--Card-padding) - 2 * var(--variant-borderWidth, 0px)) + 1px - 100%) * 999, 100%)",
          },
          // make the card resizable for demo
          overflow: "auto",
          resize: "horizontal",
        }}
      >
        <AspectRatio flex ratio="1" maxHeight={182} sx={{ minWidth: 182 }}>
          {/* <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286"
            srcSet="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286&dpr=2 2x"
            loading="lazy"
            alt=""
          /> */}
          <Avatar alt={auth?.name} src="/static/images/avatar/1.jpg"></Avatar>
        </AspectRatio>
        <CardContent>
          <Typography fontSize="xl" fontWeight="lg">
            {auth?.name}
          </Typography>
          <Typography level="body-sm" fontWeight="lg" textColor="text.tertiary">
            {auth?.userData?.role?.name}
          </Typography>
          <Sheet
            sx={{
              bgcolor: "background.level1",
              borderRadius: "sm",
              p: 1.5,
              my: 1.5,
              display: "flex",
              gap: 2,
              "& > div": { flex: 1 },
            }}
          >
            <div>
              <Typography level="body-xs" fontWeight="lg">
                Assets
              </Typography>
              <Typography fontWeight="lg">
                {userProductList.length + roomProductList.length}
              </Typography>
            </div>
            <div>
              <Typography level="body-xs" fontWeight="lg">
                Room
              </Typography>
              <Typography fontWeight="lg">
                {auth?.userData?.room?.room_number}
              </Typography>
            </div>
            <div>
              <Typography level="body-xs" fontWeight="lg">
                Reports
              </Typography>
              <Typography fontWeight="lg">{userReportList?.length}</Typography>
            </div>
          </Sheet>
          <Box sx={{ display: "flex", gap: 1.5, "& > button": { flex: 1 } }}>
            <Button variant="outlined" color="neutral">
              Chat
            </Button>
            <Button variant="solid" color="primary">
              Follow
            </Button>
          </Box>
        </CardContent>
      </Card>
      <Sheet
        sx={{
          bgcolor: "background.level1",
          borderRadius: "sm",
          p: 1.5,
          my: 1.5,
          display: "flex",
          gap: 2,
          "& > div": { flex: 1 },
        }}
      >
        <div>
          <Typography level="body-lg" fontWeight="lg">
            Assets
          </Typography>
          <Typography fontWeight="lg">
            {userProductList.length + roomProductList.length}
          </Typography>
        </div>
        <div>
          <Typography level="body-xs" fontWeight="lg">
            Room
          </Typography>
          <Typography fontWeight="lg">
            {auth?.userData?.room?.room_number}
          </Typography>
        </div>
        <div>
          <Typography level="body-xs" fontWeight="lg">
            Reports
          </Typography>
          <Typography fontWeight="lg">{userReportList?.length}</Typography>
        </div>
        <div>
          <Typography level="body-xs" fontWeight="lg">
            Reports
          </Typography>
          <Typography fontWeight="lg">{userReportList?.length}</Typography>
        </div>
        <div>
          <Typography level="body-xs" fontWeight="lg">
            Reports
          </Typography>
          <Typography fontWeight="lg">{userReportList?.length}</Typography>
        </div>
      </Sheet>
      {roomProductList &&
          roomProductList.map((product) => {
            return (
              <Product
                product={product}
                productList={product}
                key={product.id}
                setProduct={product[0]}
              ></Product>
            );
          })}
    </Box>
  );
};
export default ProfileCard;
