import React from 'react';
import GirlSvg from '../NoData';

export default function Suspense(props) {
  const { loading, fallback, children, error } = props;

  if (loading) return fallback;
  if (error) return <GirlSvg />;

  return children;
}
