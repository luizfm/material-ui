import React from 'react'

import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import useStyles from './styles.js'

const ImageCard = () => {
  const styles = useStyles()

  return (
    <Card className={styles.card}>
      <CardMedia
        className={styles.cardMedia}
        image="https://source.unsplash.com/random"
        title="Image title"
      />
      <CardContent className={styles.cardContent}>
        <Typography gutterBottom variant="h5" component="h2">
          Heading
        </Typography>
        <Typography>
          This is a media card. You can use this section to describe the
          content.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          View
        </Button>
        <Button size="small" color="primary">
          Edit
        </Button>
      </CardActions>
    </Card>
  )
}

ImageCard.propTypes = {}

ImageCard.defaultProps = {}

export default React.memo(ImageCard)
