import React from "react";
import {
  Flex,
  Box,
  Text,
  Heading,
  ListItem,
  List,
  Wrap,
  Img,
  Center,
  Divider,
} from "@chakra-ui/react";

import { Icon } from "@chakra-ui/react";

import { FaFacebookSquare, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <Box>
      <Box bg="#003380" pb="25px" pl="40px">
        <Wrap color="white">
          <Box flex="1" px="15px">
            <Box mt="16px" mb="4px">
              <Heading as="h3" size="sm">
                PRODUCT CATEGORIES
              </Heading>
            </Box>

            <Box>
              <List spacing={1} fontSize="15px">
                
                <ListItem>
                <Link to="/products" color="white">Smartphones</Link>
                  
                </ListItem>

                <ListItem>
                  <Link>Laptops</Link>
                </ListItem>

                <ListItem>
                  <Link>DSLR Cameras</Link>
                </ListItem>

                <ListItem>
                  <Link>Telvisions</Link>
                </ListItem>

                <ListItem>
                  <Link>Air Conditioners</Link>
                </ListItem>

                <ListItem>
                  <Link>Refrigerators</Link>
                </ListItem>

                <ListItem>
                  <Link>Kitchen Appliances</Link>
                </ListItem>

                <ListItem>
                  <Link>Accessories</Link>
                </ListItem>

                <ListItem>
                  <Link>Personal Care & Grooming</Link>
                </ListItem>

              </List>
            </Box>
          </Box>

          <Box flex="1" px="15px">
            <Box mt="16px" mb="4px">
              <Heading as="h3" size="sm">
                SITE INFO
              </Heading>
            </Box>

            <Box>
              <List spacing={1} fontSize="15px">
                <ListItem>
                  <Link>About Reliance Digital</Link>
                </ListItem>

                <ListItem>
                  <Link>resQ Services</Link>
                </ListItem>

                <ListItem>
                  <Link>Site Map</Link>
                </ListItem>

                <ListItem>
                  <Link>Gift Cards</Link>
                </ListItem>

                <ListItem>
                  <Link>Corporate Enquires</Link>
                </ListItem>

                <ListItem>
                  <Link>Contact Us</Link>
                </ListItem>

              </List>
            </Box>
          </Box>

          <Box flex="1" px="15px">
            <Box mt="16px" mb="4px">
              <Heading as="h3" size="sm">
                RESOURCE CENTRE
              </Heading>
            </Box>

            <Box>
              <List spacing={1} fontSize="15px">
                <ListItem>
                  <Link>Product Reviews</Link>
                </ListItem>

                <ListItem>
                  <Link>Buying Guides</Link>
                </ListItem>
                <ListItem>
                  <Link>How Tos</Link>
                </ListItem>

                <ListItem>
                  <Link>Featured Stories</Link>
                </ListItem>

                <ListItem>
                  <Link>Events & Happenings</Link>
                </ListItem>
              </List>
            </Box>
          </Box>

          <Box flex="1" px="15px">
            <Box mt="16px" mb="4px">
              <Heading as="h3" size="sm">
                POLICIES
              </Heading>
            </Box>

            <Box>
              <List spacing={1} fontSize="15px">
                <ListItem>
                  <Link>Terms of Use</Link>
                </ListItem>

                <ListItem>
                  <Link>FAQs</Link>
                </ListItem>
                <ListItem>
                  <Link>Cancellation and Return Policy</Link>
                </ListItem>

                <ListItem>
                  <Link>Pricing and Payments Policy</Link>
                </ListItem>

                <ListItem>
                  <Link>Shipping and Delivery Policy</Link>
                </ListItem>

                <ListItem>
                  <Link>Privacy Policy</Link>
                </ListItem>

                <ListItem>
                  <Link>E-waste Recycling Policy</Link>
                </ListItem>

                <ListItem>
                  <Link>EMI and Editional Cashback T&C</Link>
                </ListItem>

                <ListItem>
                  <Link>RelianceOne Loyalty Program T&C</Link>
                </ListItem>

                <ListItem>
                  <Link>Caution Notice</Link>
                </ListItem>
              </List>
            </Box>
          </Box>
        </Wrap>

        <Flex color="white">
          <Box flex="1" pl="15px">
            <Box mt="16px" mb="4px">
              <Heading as="h3" size="sm">
                FOLLOW US
              </Heading>
            </Box>

            <Box display="flex" gap="12px" mt="12px">
              <Icon w="20px" h="24px" as={FaFacebookSquare} />
              <Icon w="20px" h="24px" as={FaTwitter} />
              <Icon w="20px" h="24px" as={FaYoutube} />
            </Box>
          </Box>

          <Box flex="3" px="15px">
            <Box mt="16px" mb="4px">
              <Heading as="h3" size="sm">
                EXPERIENCE RELIANCE DIGITAL APP ON MOBILE
              </Heading>
            </Box>

            <Box display="flex" alignItems="baseline" gap="10px" mt="12px">
              <Img
                w="122px"
                h="42px"
                src="https://www.reliancedigital.in/build/client/images/google_play_store.png"
              />
              <Img
                w="122px"
                h="42px"
                src="https://www.reliancedigital.in/build/client/images/ios_app_store_icon.png"
              />
            </Box>
          </Box>
        </Flex>
      </Box>

      <Box
        bg="#0a244a"
        color="white"
        justifyContent="center"
        fontSize="13px"
        py="14px"
      >
        <Box>
          <Center>
            <Text textDecoration="underline">Disclaimer</Text>
          </Center>
          <Center w="90%" m="auto" py="14px">
            <Text textAlign="center">
              Product prices, offers and availability are subject to change from
              time to time. All prices are inclusive of taxes. Product colours &
              images are only for illustration and they may not exactly match
              with the actual product. Product specs are subject to change & may
              vary from actual product. While every care is taken to avoid
              inaccuracies in content, these are provided as is, without
              warranty of any kind.
            </Text>
          </Center>
        </Box>

        <Divider />

        <Box py="14px">
          <Center>
            <Text>© 2022 Reliance Digital. All Rights Reserved</Text>
          </Center>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
