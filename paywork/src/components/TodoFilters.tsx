import React from 'react';
import FilterLink from '../containers/FilterLink';
import { VisibilityFilters } from '../types';

interface CounterProps {
    taskCounter: {
        counter: number,
        content: string
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ taskCounter: { counter, content } }: CounterProps) => (
    <div className="filters-container">
        <div>
            <span className="active">
                {counter}
            </span>
            {' '}
            <span>{content}</span>
        </div>
        <div className="filters">
            <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
            <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
            <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
        </div>
    </div>
);