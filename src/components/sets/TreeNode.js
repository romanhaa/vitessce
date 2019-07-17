/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { TreeNode as RcTreeNode } from 'rc-tree';
import { Popover } from 'antd';

import { getDataAndAria } from 'rc-tree/es/util';
import classNames from 'classnames';

function CurrentSetNode(props) {
  const {
    title,
    setKey,
    prefixCls,
    tree,
  } = props;
  return (
    <input value={title} type="text" className={`${prefixCls}-current-set-input`} onChange={(e) => { tree.onChangeNodeName(setKey, e.target.value, true); }} />
  );
}

function NamedSetNodeMenu(props) {
  const {
    tree,
    setKey,
  } = props;
  return (
    <ul className="named-set-node-menu">
      <li onClick={() => { tree.viewSet(setKey); }}>View</li>
      <li>View children</li>
      <li>View grandchildren</li>
      <li>Change color</li>
      <li>Rename</li>
      <li>Open in new tab</li>
      <li>Set to union of children</li>
      <li>Delete</li>
    </ul>
  );
}


function NamedSetNode(props) {
  const {
    title,
    prefixCls,
    isEditing,
  } = props;
  return (
    <Popover
      content={<NamedSetNodeMenu {...props} />}
      title={undefined}
      trigger="click"
    >
      {isEditing
        ? (<span className={`${prefixCls}-title`}>{title}</span>)
        : (<span className={`${prefixCls}-title`}>{title}</span>)}

    </Popover>
  );
}

export default class TreeNode extends RcTreeNode {
  renderSelector = () => {
    const { dragNodeHighlight } = this.state;
    const {
      title,
      size,
      isCurrentSet,
      isSelected,
    } = this.props;
    const {
      rcTree: {
        prefixCls,
        draggable,
      },
    } = this.context;

    const wrapClass = `${prefixCls}-node-content-wrapper`;

    return (
      <span
        ref={this.setSelectHandle}
        title={typeof title === 'string' ? title : ''}
        className={classNames(
          `${wrapClass}`,
          `${wrapClass}-${this.getNodeState() || 'normal'}`,
          isSelected && `${prefixCls}-node-selected`,
          (!isCurrentSet && draggable) && 'draggable',
        )}
        draggable={(!isCurrentSet && draggable) || undefined}
        aria-grabbed={(!isCurrentSet && draggable) || undefined}
        onDragStart={(!isCurrentSet && draggable) ? this.onDragStart : undefined}
      >
        {isCurrentSet ? (
          <CurrentSetNode {...this.props} prefixCls={prefixCls} />
        ) : (
          <NamedSetNode {...this.props} prefixCls={prefixCls} />
        )}
        <span className={`${prefixCls}-set-size`}>{size}</span>
      </span>
    );
  };

  render() {
    const { loading } = this.props;
    const {
      className, style,
      dragOver, dragOverGapTop, dragOverGapBottom,
      isLeaf,
      expanded, selected, checked, halfChecked,
      ...otherProps
    } = this.props;
    const {
      rcTree: {
        prefixCls,
        filterTreeNode,
        draggable,
      },
    } = this.context;
    const disabled = this.isDisabled();
    const dataOrAriaAttributeProps = getDataAndAria(otherProps);
    return (
      <li
        className={classNames(className, {
          [`${prefixCls}-treenode-disabled`]: disabled,
          [`${prefixCls}-treenode-switcher-${expanded ? 'open' : 'close'}`]: !isLeaf,
          [`${prefixCls}-treenode-checkbox-checked`]: checked,
          [`${prefixCls}-treenode-checkbox-indeterminate`]: halfChecked,
          [`${prefixCls}-treenode-selected`]: selected,
          [`${prefixCls}-treenode-loading`]: loading,

          'drag-over': !disabled && dragOver,
          'drag-over-gap-top': !disabled && dragOverGapTop,
          'drag-over-gap-bottom': !disabled && dragOverGapBottom,
          'filter-node': filterTreeNode && filterTreeNode(this),
        })}
        style={style}
        role="treeitem"
        onDragEnter={draggable ? this.onDragEnter : undefined}
        onDragOver={draggable ? this.onDragOver : undefined}
        onDragLeave={draggable ? this.onDragLeave : undefined}
        onDrop={draggable ? this.onDrop : undefined}
        onDragEnd={draggable ? this.onDragEnd : undefined}
        {...dataOrAriaAttributeProps}
      >
        {this.renderSwitcher()}
        {this.renderCheckbox()}
        {this.renderSelector()}
        {this.renderChildren()}
      </li>
    );
  }
}
