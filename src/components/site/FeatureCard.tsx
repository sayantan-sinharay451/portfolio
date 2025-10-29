import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';

interface FeatureCardProps {
  Icon: React.ElementType;
  title: string;
  description: string;
}

const FeatureCard = ({ Icon, title, description }: FeatureCardProps) => {
  return (
    <Card className="shadow-glow rounded-md border-none">
      <CardHeader className="item-center flex flex-row justify-start">
        <div className="bg-primary/10 flex h-14 w-14 items-center justify-center rounded-md">
          <Icon className="text-primary" size={24} />
        </div>
        <CardTitle className="flex items-center justify-center px-5">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>
          <p className="text-muted-foreground text-base">{description}</p>
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
