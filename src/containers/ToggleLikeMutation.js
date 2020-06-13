import React from 'react';
import { Mutation } from 'react-apollo'
import { LIKE_PHOTO } from '../services/likePhoto'

export function ToggleLikeMutation({ children }) {
  return (
    <Mutation mutation={LIKE_PHOTO}>
      { children }
    </Mutation>
  );
}
