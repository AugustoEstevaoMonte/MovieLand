import { Grid, Card, CardActionArea, CardMedia, CardContent, Typography, Box } from '@mui/material';

const Cards = ({ dark, movies }) => {
  return (
    <>
      <Grid container spacing={2}>

          {movies.map((filmes, key) => {
            return (
              <Grid item xs={12} sm={6} md={3} key={key}>

              <Box display="flex" justifyContent="center" sx={{ marginTop: '5rem' }}>
                <Card sx={{ width: "310px", borderRadius: "12px", maxHeight: '490px', border: 'none' }}>
                  <CardActionArea sx={{
                    paddingBottom: "25px !important",
                    overflow: 'hidden',
                    "&:hover": [{ "boxShadow": '0px 30px 18px -8px rgba(0, 0, 0, 0.1)' }, { 'transform': 'scale(1.05, 1.05)' }],
                    border: 'none',
                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0, 1)',
                    boxShadow: '0px 13px 10px -7px rgba(0, 0, 0, 0.1)'
                  }}>
                    <CardMedia
                      component="img"
                      height="380"
                      image={filmes.Poster !== 'N/A' ? filmes.Poster : 'https://via.placeholder.com/400'}
                      alt={filmes.Title}
                    />
                    <CardContent sx={{
                      padding: "16px 24px 24px 24px"
                    }}>
                      <Typography gutterBottom variant="h3" component="div" sx={{
                        letterSpacing: '1px',
                        fontWeight: 'bold',
                        textTransform: 'uppercase',
                        fontSize: { xs: "1rem", md: "1rem" },
                        width: "fit-content",
                        background: dark ? 'rgba(0,212,255,1) 100%' : 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)',
                        WebkitTextFillColor: "transparent",
                        WebkitBackgroundClip: "text",
                        fontFamily: 'Inter'
                      }}>
                        {filmes.Type}
                      </Typography>
                      <Typography variant="body2"
                        sx={{
                          marginTop: '5px',
                          color: dark ? '#fff' : '',
                          fontFamily: 'Inter',
                          marginBottom: '5px'
                        }}>
                        {filmes.Title}
                      </Typography>

                      <Typography variant="p" sx={{
                        marginTop: '5px',
                        letterSpacing: '1px',
                        fontWeight: '400',
                        textTransform: 'uppercase',
                        fontSize: "0.8rem",
                        width: "fit-content",
                        background: dark ? 'rgba(0,212,255,1) 100%' : "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
                        WebkitTextFillColor: "transparent",
                        WebkitBackgroundClip: "text",
                        fontFamily: 'Inter'
                      }}>
                        {filmes.Year}
                      </Typography>


                    </CardContent>
                  </CardActionArea>
                </Card>
              </Box>
            </Grid>
            )
          })}
      </Grid>
    </>
  )
}

export default Cards;