import React from 'react';
import { Box, Container, Typography, Breadcrumbs, Link } from '@mui/material';

export default function OurStory() {
  return (
    <Container component="main" maxWidth="md" className="our-story-container">
      {/* Breadcrumbs for Navigation */}
      <Breadcrumbs aria-label="breadcrumb" className="our-story-breadcrumbs" separator=">">
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <Typography color="text.primary">Our Story</Typography>
      </Breadcrumbs>

      {/* Main Content */}
      <Box>
        <Typography variant="h3" component="h1" className="our-story-header">
          Our Story
        </Typography>
        <Typography variant="body1" className="our-story-paragraph">
          Once upon a time, in a bustling town filled with pet lovers, there was a shop that everyone talked about—a pet goods online store unlike any other. 
          It wasn’t just a store, but a paradise for every pet and pet owner, offering a variety of carefully curated, high-quality products that catered to pets of all kinds. 
          From dogs and cats to birds and fish, every pet could find something special here.
        </Typography>
        <Typography variant="body1" className="our-story-paragraph">
          The shop’s mission was simple: to make every pet’s life happier, healthier, and more fun. Whether it was a playful pup looking for the perfect chew toy, 
          a picky cat in search of the finest gourmet food, or a bird needing a cozy new home, this shop had it all. 
          Not only did it offer nutritious food and comfortable bedding, but it also carried grooming essentials and delightful toys that could brighten any pet’s day.
        </Typography>
        <Typography variant="body1" className="our-story-paragraph">
          But what made this online shop truly special was its heart for the customers. 
          Every time someone visited the site, they were welcomed with a sleek, user-friendly design that made shopping effortless. 
          Browsing through the shop was a breeze, and with just a few clicks, customers could add their favorite items to their carts and complete their purchase securely. 
          The shop's team had also gone a step further—offering personalized recommendations based on each pet’s breed and age, ensuring every product was a perfect fit.
        </Typography>
        <Typography variant="body1" className="our-story-paragraph">
          The shop quickly became the go-to destination for new pet parents and seasoned pet owners alike. 
          It wasn’t just the variety of products or the convenience that kept them coming back; it was the feeling of trust. 
          Customers knew that when they ordered, they were receiving only the best for their furry, feathered, and finned friends—delivered straight to their doors.
        </Typography>
        <Typography variant="body1" className="our-story-paragraph">
          In this vibrant community of pet lovers, the pet goods online store stood out as a reliable companion for every pet owner’s journey. 
          And with every toy sold, every treat delivered, and every product tailored just right, they helped create a world where pets and their owners lived in perfect harmony, filled with joy, comfort, and love.
        </Typography>
      </Box>
    </Container>
  );
}
