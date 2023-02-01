import React from 'react';
import { VisibilityFilters } from '../types';
import EmptyMessage from './EmptyMessage';
import TodoFilters from './TodoFilters';

interface MessageProps {
  filterState: string,
  getTaskCounter(): {
    counter: number,
    content: string
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ filterState, getTaskCounter }: MessageProps) => (
    filterState === VisibilityFilters.SHOW_COMPLETED
        ? (
            <>
                <EmptyMessage message="There are no tasks completed yet!" />
                <TodoFilters taskCounter={getTaskCounter()} />
            </>
        ) : <EmptyMessage message="Add your first To Do!" />
);