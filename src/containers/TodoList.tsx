import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import TodoFilters from 'components/TodoFilters';
import TodoHeader from 'components/TodoHeader';
import TodoForm from 'components/TodoForm';
import TodoItem from 'components/TodoItem';
import * as itemsActions from '../store/actions/items';
import { ApplicationState, Item, VisibilityFilters } from '../types';
import TodoMessage from '../components/TodoMessage';

interface StateProps {
    items: Item[],
    filterState: string
}

interface DispatchProps {
    addItem(content: string): void,
    toggleItem(id: number): void,
    toggleEditItem(id: number): void,
    updateItem(id: number, content: string): void,
    removeItem(id: number): void,
    loadRequest(): void
}

type Props = StateProps & DispatchProps;

const TodoList = ({
    items,
    addItem,
    toggleItem,
    toggleEditItem,
    updateItem,
    removeItem,
    filterState,
    loadRequest,
    }: Props) => {
    useEffect(() => {
        loadRequest();
    }, [loadRequest]);

    // 할 일 갯수에 따라 남은 갯수, 완료한 갯수 출력
    const getTaskCounter = () => (filterState === VisibilityFilters.SHOW_COMPLETED
        ? {
            counter: items.filter((item) => item.isCheck).length,
            content: 'completed tasks',
        } : {
            counter: items.filter((item) => !item.isCheck).length,
            content: 'tasks left',
        });

    return (
        <div className="todo-list">
        <TodoHeader title="TodoList" />

        <div className="content">
            <TodoForm
            emptyList={!items.length}
            addItem={addItem}
            />

            {items.length === 0
            ? (
                <TodoMessage
                filterState={filterState}
                getTaskCounter={getTaskCounter}
                />
            ) : (
                <>
                <ul className="items">
                    {items.map((item) => (
                    <TodoItem
                        key={item.id}
                        item={item}
                        toggleItem={toggleItem}
                        toggleEditItem={toggleEditItem}
                        updateItem={updateItem}
                        removeItem={removeItem}
                    />
                    ))}
                </ul>
                <TodoFilters taskCounter={getTaskCounter()} />
                </>
            )}
        </div>
        </div>
    );
};

// 할 일 상태에 따른 분할
const filterItems = (items: Item[], filter: string) => {
    switch (filter) {
        case VisibilityFilters.SHOW_ACTIVE:
        return items.filter((item) => !item.isCheck);
        case VisibilityFilters.SHOW_COMPLETED:
        return items.filter((item) => item.isCheck);
        default:
        return items;
    }
};

const mapStateToProps = (state: ApplicationState) => ({
    items: filterItems(state.items.todoList, state.filterState),
    filterState: state.filterState,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(itemsActions, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(TodoList);