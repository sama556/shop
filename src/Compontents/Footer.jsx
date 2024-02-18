
import React from "react";
import {
  Box,
  Container,
  Grid,
  ListItem,
  List,
  Typography,
  TextField,
  Button,
} from "@mui/material";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "#f5f5f5" }}>
      <Container>
        <Grid container spacing={2}>
          <Grid item lg={3} md={6} xs={12}>
            <Box>
              <div>
                <Typography variant="h6" gutterBottom sx={{ color: "#333" }}>
                  Elessi
                </Typography>
                <Typography paragraph sx={{ color: "#333" }}>
                  Calista Wise 7292 Dictum Av. Antonio, Italy.
                </Typography>
                <Typography paragraph sx={{ color: "#333" }}>
                  (+01)-800-3456-88
                </Typography>
                <Typography paragraph sx={{ color: "#333" }}>
                  <a
                    href="mailto:contact@company.com"
                    style={{ color: "#333" }}
                  >
                    contact@company.com
                  </a>
                </Typography>
              </div>
            </Box>
          </Grid>
          <Grid item lg={2} md={6} xs={12}>
            <Box>
              <Typography variant="h6" gutterBottom sx={{ color: "#333" }}>
                Useful Links
              </Typography>
              <List>
                <ListItem>
                  <a
                    href="https://elessi2.myshopify.com/pages/shipping-delivery/?preview_theme_id="
                    style={{ color: "#333" }}
                  >
                    Delivery Information
                  </a>
                </ListItem>
                <ListItem>
                  <a
                    href="https://elessi2.myshopify.com/pages/terms-conditions/?preview_theme_id="
                    style={{ color: "#333" }}
                  >
                    Terms &amp; Condition
                  </a>
                </ListItem>
                <ListItem>
                  <a
                    href="https://elessi2.myshopify.com/pages/about-us/?preview_theme_id="
                    style={{ color: "#333" }}
                  >
                    Customer Service
                  </a>
                </ListItem>
                <ListItem>
                  <a
                    href="https://elessi2.myshopify.com/pages/privacy-policy/?preview_theme_id="
                    style={{ color: "#333" }}
                  >
                    Privacy Policy
                  </a>
                </ListItem>
                <ListItem>
                  <a
                    href="https://elessi2.myshopify.com/search/?preview_theme_id="
                    style={{ color: "#333" }}
                  >
                    Search Terms
                  </a>
                </ListItem>
              </List>
            </Box>
          </Grid>
          <Grid item lg={4} md={6} xs={12}>
            <Box>
              <Typography variant="h6" gutterBottom sx={{ color: "#333" }}>
                Get in Touch
              </Typography>
              <List>
                <ListItem>
                  <span style={{ color: "#333" }}>Whatsapp</span>
                  <span style={{ color: "#333" }}>+001 2233 456 291</span>
                </ListItem>
                <ListItem>
                  <span style={{ color: "#333" }}>Real Live Support</span>
                  <span style={{ color: "#333" }}>Calista Antonio, Italy</span>
                </ListItem>
                <ListItem>
                  <span style={{ color: "#333" }}>Monday - Friday</span>
                  <span style={{ color: "#333" }}>08:00 - 20:00</span>
                </ListItem>
                <ListItem>
                  <span style={{ color: "#333" }}>Saturday</span>
                  <span style={{ color: "#333" }}>09:00 - 21:00</span>
                </ListItem>
                <ListItem>
                  <span style={{ color: "#333" }}>Sunday</span>
                  <span style={{ color: "#333" }}>13:00 - 22:00</span>
                </ListItem>
              </List>
            </Box>
          </Grid>
          <Grid item lg={3} md={6} xs={12}>
            <Box>
              <Typography variant="h6" gutterBottom sx={{ color: "#333" }}>
                Newsletter Signup
              </Typography>
              <div>
                <Typography paragraph sx={{ color: "#333" }}>
                  Subscribe to our newsletters now and stay up-to-date with new
                  collections.
                </Typography>
                <form method="post" action="/contact#contact_form">
                  <input type="hidden" name="form_type" value="customer" />
                  <input type="hidden" name="utf8" value="✓" />
                  <input
                    type="hidden"
                    name="contact[tags]"
                    value="newsletter"
                  />
                  <Grid container spacing={2}>
                    <Grid item xs={8}>
                      <TextField
                        type="email"
                        name="contact[email]"
                        placeholder="Your email address"
                        variant="outlined"
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <Button type="submit" variant="contained" fullWidth>
                        Subscribe
                      </Button>
                    </Grid>
                  </Grid>
                </form>
                <Typography paragraph>
                  <img
                    src="//elessi2.myshopify.com/cdn/shop/files/payment-icons_600x.png?v=1614392572"
                    alt=""
                    style={{ maxWidth: "191px" }}
                  />
                </Typography>
              </div>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Footer;
