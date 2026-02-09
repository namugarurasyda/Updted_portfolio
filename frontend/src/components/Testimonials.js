import { useState, useEffect } from 'react';
import axios from 'axios';

// Swiper components and styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// Material UI
import { 
  Avatar, Box, Card, Typography, useTheme, Container 
} from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const Testimonials = () => {
  const theme = useTheme();
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    // Note: Ensure your backend endpoint matches this
    axios.get('/testimonials')
      .then((res) => setTestimonials(res.data))
      .catch((err) => console.error("Error fetching testimonials:", err));
  }, []);

  return (
    <Box 
      id='testimonials' 
      component="section" 
      sx={{ 
        backgroundColor: '#f7f8f9', // Light section-bg feel
        py: { xs: 6, md: 10 },
        overflow: 'hidden' 
      }}
    >
      <Container maxWidth="lg">
        {/* Section Title */}
        <Box textAlign="center" mb={5}>
          <Typography 
            variant='h3' 
            sx={{ fontWeight: 700, color: '#37423b', mb: 2, fontSize: '2rem' }}
          >
            Testimonials
          </Typography>
          <Box 
            sx={{ 
              width: '60px', height: '2px', bgcolor: theme.palette.primary.main, 
              margin: '0 auto 20px' 
            }} 
          />
          <Typography variant='body1' sx={{ color: '#777', maxWidth: '800px', margin: '0 auto' }}>
            As a programmer, Syda is a true asset to any team. Her technical expertise and 
            dedication are reflected in the words of her colleagues and clients.
          </Typography>
        </Box>

        {/* Swiper implementation */}
        <Box sx={{ px: 2 }}>
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={25}
            slidesPerView={1}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            style={{ paddingBottom: '60px' }}
          >
            {testimonials.map((item, i) => (
              <SwiperSlide key={i}>
                <Card
                  elevation={0}
                  sx={{
                    p: 4,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: '10px',
                    position: 'relative',
                    border: '1px solid #eef0ef',
                    transition: '0.3s',
                    '&:hover': {
                      borderColor: theme.palette.primary.main,
                    }
                  }}
                >
                  <Box sx={{ mb: 3 }}>
                    <FormatQuoteIcon 
                      sx={{ 
                        color: theme.palette.primary.light, 
                        transform: 'rotate(180deg)',
                        fontSize: '2rem',
                        opacity: 0.6,
                        mb: -1
                      }} 
                    />
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        fontStyle: 'italic', 
                        color: '#444', 
                        lineHeight: 1.6,
                        position: 'relative',
                        zIndex: 1
                      }}
                    >
                      {item.testimonial}
                      <FormatQuoteIcon 
                        sx={{ 
                          color: theme.palette.primary.light, 
                          fontSize: '2rem', 
                          opacity: 0.6,
                          ml: 1,
                          verticalAlign: 'bottom'
                        }} 
                      />
                    </Typography>
                  </Box>

                  <Box sx={{ mt: 'auto', display: 'flex', alignItems: 'center' }}>
                    <Avatar
                      src={item.author_photo}
                      alt={item.author_name}
                      sx={{ width: 60, height: 60, mr: 2, border: '4px solid #fff', boxShadow: '0 2px 15px rgba(0,0,0,0.1)' }}
                    />
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#37423b', lineHeight: 1 }}>
                        {item.author_name}
                      </Typography>
                      <Typography variant="caption" sx={{ color: '#999', textTransform: 'uppercase', letterSpacing: '1px' }}>
                        {item.author_title}
                      </Typography>
                    </Box>
                  </Box>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Container>

      {/* Globally styling the Swiper bullets to match the theme */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background-color: #fff;
          opacity: 1;
          border: 1px solid ${theme.palette.primary.main};
        }
        .swiper-pagination-bullet-active {
          background-color: ${theme.palette.primary.main} !important;
        }
      `}</style>
    </Box>
  );
};

export default Testimonials;









// // import { useState, useEffect } from 'react';
// // import axios from 'axios';

// // // Material UI
// // import Avatar from '@mui/material/Avatar';
// // import Box from '@mui/material/Box';
// // import Card from '@mui/material/Card';
// // import Grid from '@mui/material/Grid';
// // import ListItem from '@mui/material/ListItem';
// // import ListItemAvatar from '@mui/material/ListItemAvatar';
// // import ListItemText from '@mui/material/ListItemText';
// // import Typography from '@mui/material/Typography';
// // import { useTheme } from '@mui/material/styles';

// // import TextIcon from '@mui/icons-material/TextSmsOutlined';

// // axios.defaults.xsrfCookieName = 'csrftoken';
// // axios.defaults.xsrfHeaderName = 'X-CSRFToken';

// // const Testimonials = () => {
// //   const theme = useTheme();
// //   const [testimonials, setTestimonials] = useState([]);

// //   const fetchTestimonials = () => {
// //     axios
// //       .get('/testimonials', {
// //         headers: {
// //           Accept: 'application/json',
// //           'Access-Control-Allow-Origin': process.env.BACKEND_URL,
// //         },
// //       })
// //       .then((response) => {
// //         setTestimonials(response.data);
// //       })
// //       .catch((error) => console.log(error));
// //   };

// //   useEffect(() => {
// //     fetchTestimonials();
// //   }, []);

// //   return (
// //     <div id='testimonials'>
// //       <Box
// //         maxWidth={{ sm: 720, md: 1236 }}
// //         width={1}
// //         margin='0 auto'
// //         paddingX={2}
// //         paddingY={4}
// //       >
// //         <Box marginBottom={4}>
// //           <Typography
// //             variant='h4'
// //             align='center'
// //             fontWeight={700}
// //             gutterBottom
// //             data-aos='fade-up'
// //           >
// //             Testimonials
// //           </Typography>
// //           <Typography
// //             variant='h6'
// //             color={theme.palette.text.secondary}
// //             align='center'
// //             marginTop={3}
// //             marginBottom={3}
// //             data-aos='fade-up'
// //           >
// //            As a programmer, Syda is a true asset to any team. Her technical expertise, problem-solving skills, and ability to deliver high-quality code on time are exceptional. 
// //            She is a dedicated and passionate developer as the different former teammates elaborate.
// //           </Typography>
// //         </Box>
// //         <Grid container spacing={4}>
// //           {testimonials.map((item, i) => (
// //             <Grid item xs={12} sm={6} md={4} key={i}>
// //               <Box
// //                 display='block'
// //                 width={1}
// //                 height={1}
// //                 sx={{
// //                   textDecoration: 'none',
// //                   transition: 'all .2s ease-in-out',
// //                   '&:hover': {
// //                     transform: 'translateY(-4px)',
// //                   },
// //                 }}
// //               >
// //                 <Box
// //                   component={Card}
// //                   padding={4}
// //                   borderRadius={2}
// //                   width={1}
// //                   height={1}
// //                   variant='outlined'
// //                   data-aos='fade-up'
// //                   data-aos-delay={100}
// //                   data-aos-offset={100}
// //                   data-aos-duration={600}
// //                 >
// //                   <Box display='flex' flexDirection='column'>
// //                     <Box
// //                       component={Avatar}
// //                       width={50}
// //                       height={50}
// //                       marginBottom={2}
// //                       backgroundColor={theme.palette.primary.main}
// //                       color={theme.palette.background.paper}
// //                     >
// //                       <TextIcon
// //                         sx={{
// //                           color: theme.palette.common.white,
// //                           height: 25,
// //                           width: 25,
// //                         }}
// //                       />
// //                     </Box>
// //                     <Typography
// //                       color={theme.palette.text.secondary}
// //                       gutterBottom
// //                     >
// //                       {item.testimonial}
// //                     </Typography>
// //                     <ListItem
// //                       component='div'
// //                       disableGutters
// //                       sx={{ padding: 0, marginTop: 1 }}
// //                     >
// //                       <ListItemAvatar>
// //                         <Avatar src={item.author_photo} />
// //                       </ListItemAvatar>
// //                       <ListItemText
// //                         sx={{ margin: 0 }}
// //                         primary={
// //                           <Typography
// //                             variant='h6'
// //                             color='primary'
// //                             gutterBottom
// //                             sx={{ fontWeight: 700 }}
// //                           >
// //                             {item.author_name}
// //                           </Typography>
// //                         }
// //                         secondary={
// //                           <Typography
// //                             variant='subtitle1'
// //                             gutterBottom
// //                             sx={{ fontWeight: 500 }}
// //                           >
// //                             {item.author_title}
// //                           </Typography>
// //                         }
// //                       />
// //                     </ListItem>
// //                   </Box>
// //                 </Box>
// //               </Box>
// //             </Grid>
// //           ))}
// //         </Grid>
// //       </Box>
// //     </div>
// //   );
// // };

// // export default Testimonials;



// import { useState, useEffect } from 'react';
// import axios from 'axios';

// // Swiper components and styles
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination, Autoplay } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/pagination';

// // Material UI
// import Avatar from '@mui/material/Avatar';
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import ListItem from '@mui/material/ListItem';
// import ListItemAvatar from '@mui/material/ListItemAvatar';
// import ListItemText from '@mui/material/ListItemText';
// import Typography from '@mui/material/Typography';
// import { useTheme } from '@mui/material/styles';

// import TextIcon from '@mui/icons-material/FormatQuote'; // Updated to look more like a quote icon

// const Testimonials = () => {
//   const theme = useTheme();
//   const [testimonials, setTestimonials] = useState([]);

//   const fetchTestimonials = () => {
//     axios
//       .get('/testimonials', {
//         headers: {
//           Accept: 'application/json',
//         },
//       })
//       .then((response) => {
//         setTestimonials(response.data);
//       })
//       .catch((error) => console.log(error));
//   };

//   useEffect(() => {
//     fetchTestimonials();
//   }, []);

//   return (
//     <Box id='testimonials' component="section" sx={{ backgroundColor: '#f8fbfe', py: 8 }}>
//       <Box
//         maxWidth={{ sm: 720, md: 1236 }}
//         width={1}
//         margin='0 auto'
//         paddingX={2}
//       >
//         {/* Section Title */}
//         <Box marginBottom={4}>
//           <Typography variant='h4' align='center' fontWeight={700} gutterBottom data-aos='fade-up'>
//             Testimonials
//           </Typography>
//           <Typography variant='h6' color='textSecondary' align='center' data-aos='fade-up'>
//             As a programmer, Syda is a true asset to any team...
//           </Typography>
//         </Box>

//         {/* Swiper Implementation */}
//         <Box data-aos='fade-up' data-aos-delay='100'>
//           <Swiper
//             modules={[Pagination, Autoplay]}
//             spaceBetween={30}
//             slidesPerView={1}
//             autoplay={{ delay: 5000, disableOnInteraction: false }}
//             pagination={{ clickable: true }}
//             breakpoints={{
//               640: { slidesPerView: 2 },
//               1024: { slidesPerView: 3 },
//             }}
//             style={{ paddingBottom: '50px' }} // Space for pagination dots
//           >
//             {testimonials.map((item, i) => (
//               <SwiperSlide key={i}>
//                 <Box
//                   component={Card}
//                   padding={4}
//                   borderRadius={2}
//                   height="100%"
//                   variant='outlined'
//                   sx={{
//                     position: 'relative',
//                     transition: 'all .2s ease-in-out',
//                     '&:hover': { transform: 'translateY(-4px)' },
//                   }}
//                 >
//                   <Box display='flex' flexDirection='column' height="100%">
//                     <Typography
//                       color='textSecondary'
//                       variant="body1"
//                       fontStyle="italic"
//                       sx={{ mb: 2 }}
//                     >
//                       <TextIcon sx={{ verticalAlign: 'middle', mr: 1, opacity: 0.3 }} />
//                       {item.testimonial}
//                     </Typography>
                    
//                     <Box sx={{ flexGrow: 1 }} /> {/* Pushes footer to bottom */}

//                     <ListItem component='div' disableGutters sx={{ padding: 0, marginTop: 2 }}>
//                       <ListItemAvatar>
//                         <Avatar 
//                           src={item.author_photo} 
//                           sx={{ width: 60, height: 60, border: `4px solid ${theme.palette.background.paper}` }} 
//                         />
//                       </ListItemAvatar>
//                       <ListItemText
//                         sx={{ ml: 1 }}
//                         primary={
//                           <Typography variant='h6' fontWeight={700} color="textPrimary">
//                             {item.author_name}
//                           </Typography>
//                         }
//                         secondary={
//                           <Typography variant='subtitle2' color="textSecondary">
//                             {item.author_title}
//                           </Typography>
//                         }
//                       />
//                     </ListItem>
//                   </Box>
//                 </Box>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </Box>
//       </Box>
      
//       {/* Custom Styling for Swiper Dots to match the Bootstrap feel */}
//       <style jsx global>{`
//         .swiper-pagination-bullet-active {
//           background-color: ${theme.palette.primary.main} !important;
//         }
//       `}</style>
//     </Box>
//   );
// };

// export default Testimonials;