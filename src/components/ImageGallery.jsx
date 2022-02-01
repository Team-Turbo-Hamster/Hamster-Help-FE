import React from "react";
import { Image } from "cloudinary-react";
import {
  ImageList,
  ImageListItem,
  Modal,
  Box,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useStyles from "../styles/components/image-gallery.styles";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  bgcolor: "background.paper",
  boxShadow: 24,
  height: "100%",
  p: 4,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const ImageGallery = ({ images }) => {
  const [modal, setModal] = React.useState({ open: false, image: "" });

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const classes = useStyles();

  const handleOpen = (image) => setModal({ open: true, image });
  const handleClose = () => setModal({ open: false, image: "" });

  return (
    <>
      <Box>
        <ImageList
          sx={{ width: "100%", height: "auto", padding: "20px" }}
          cols={matches ? images.length : 1}
          rowHeight={164}
        >
          {images.map((image) => (
            <ImageListItem
              className={classes.imageItem}
              key={image}
              onClick={() => handleOpen(image)}
            >
              <Image
                key={image}
                width="200"
                cloudName="turbo-hamster"
                crop="scale"
                publicId={image}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>

      <Modal
        open={modal.open}
        onClose={handleClose}
        aria-labelledby="view image"
        aria-describedby="open image modal"
      >
        <Box sx={modalStyle}>
          <Image
            width="400"
            cloudName="turbo-hamster"
            // crop="scale"
            publicId={modal.image}
          />
          <Typography
            variant="h1"
            sx={{ fontWeight: "bold" }}
            className={classes.closeButton}
            onClick={handleClose}
          >
            X
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default ImageGallery;
