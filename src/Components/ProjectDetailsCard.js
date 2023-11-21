import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

const ProjectDetailsCard = ({ details, onCloseClick }) => {
  return (
    <Card>
      <CardContent>
        <p>{details}</p>
        <Button onClick={onCloseClick}>Close</Button>
      </CardContent>
    </Card>
  );
};

export default ProjectDetailsCard;
