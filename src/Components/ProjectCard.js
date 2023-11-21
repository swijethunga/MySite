import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

const ProjectCard = ({ imageSrc, title, onAboutClick, onOpenClick }) => {
  return (
    <Card>
      <CardMedia component="img" height="140" image={imageSrc} alt={title} />
      <CardContent>
        <h3>{title}</h3>
        <Button onClick={onAboutClick}>About Project</Button>
        <Button onClick={onOpenClick}>Open on GitHub</Button>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
