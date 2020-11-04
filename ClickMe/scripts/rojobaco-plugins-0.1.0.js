/*
bootstrap4 v0.1.0
Copyright (c) 2020 RojobaCo All rights reserved.
*/

'use strict';
RojobaCo = window.RojobaCo = {};
$ = jQuery;

(function() {
  var indexOf = [].indexOf,
    hasProp = {}.hasOwnProperty;

  RojobaCo.BasePlugin = class BasePlugin {
    constructor(Element) {
      this.Element = Element;
    }

  };

  RojobaCo.Grid = (function() {
    var KEY_CODES;

    class Grid {
      constructor(TableGrid) {
        var box, column, l, len, options, ref;
        this.TableGrid = TableGrid;
        options = this.TableGrid.Options;
        this.RemovedIds = [];
        this.ColumnHeader = new RojobaCo.GridColumnHeader(this.TableGrid);
        this.GridFooter = new RojobaCo.GridFooter(this.TableGrid);
        this.ColumnHeader.render(this.TableGrid.View);
        this.Detail = $('<div>').addClass('tablegrid-detail').scroll((e) => {
          var divSelect, el;
          if (this.CellSelected) {
            el = this.CellSelected.Element[0];
            divSelect = $('div.tablegrid-cell-select');
            if (divSelect.length > 0) {
              divSelect.css('left', el.offsetLeft);
            }
          }
          $('.tablegrid-header', this.TableGrid.View).scrollLeft($(e.target).scrollLeft());
        }).appendTo(this.TableGrid.View);
        box = $('<div>').addClass('tablegrid-detail-box').appendTo(this.Detail);
        this.MultiSelectColumn = null;
        if (options.multiselect) {
          this.MultiSelectColumn = new RojobaCo.GridMultiSelectColumn(this.TableGrid, this.Detail);
        }
        this.ActionColumn = null;
        if (options.rowActions.length > 0) {
          this.ActionColumn = new RojobaCo.GridActionColumn(this.TableGrid, this.Detail);
        }
        this.FrozenColumns = [];
        ref = this.ColumnHeader.GridColumns;
        for (l = 0, len = ref.length; l < len; l++) {
          column = ref[l];
          if (column.Freeze) {
            this.FrozenColumns.push(new RojobaCo.GridFrozenColumn(this.TableGrid, column));
          }
        }
        if (options.height) {
          this.Detail.css('height', options.height + 'px');
        }
        if (options.hide) {
          this.Detail.css('display', 'none');
        }
        this.TableElement = $('<table>').addClass('table table-hover').appendTo(box);
        this.TableElement.addClass(this.TableGrid.Element.attr('class'));
        this.GridFooter.render(this.TableGrid.Container);
        this.Rows = [];
        if (options.edit) {
          $(document).on('click', (e) => {
            if ($(e.target).is('a') && $(e.target).parents('ul.dropdown-menu').length > 0) {
              return;
            }
            if (this.TableGrid.Edited) {
              if (options.onEdit) {
                options.onEdit();
              }
              this.TableGrid.Edited = false;
            }
            this.clearEditing();
          }).on('keydown', (e) => {
            if (this.CellSelected) {
              if (e.shiftKey) {
                switch (e.keyCode) {
                  case KEY_CODES.TAB:
                    e.preventDefault();
                    this.moveLeft();
                    break;
                  default:
                    return;
                }
              } else {
                switch (e.keyCode) {
                  case KEY_CODES.ARROW_LEFT:
                    e.preventDefault();
                    this.moveLeft();
                    break;
                  case KEY_CODES.ARROW_UP:
                    e.preventDefault();
                    this.moveUp();
                    break;
                  case KEY_CODES.ARROW_RIGHT:
                  case KEY_CODES.TAB:
                    e.preventDefault();
                    this.moveRight();
                    break;
                  case KEY_CODES.ARROW_DOWN:
                    e.preventDefault();
                    this.moveDown();
                    break;
                  case KEY_CODES.F2:
                    e.preventDefault();
                    this.editCell(this.CellSelected);
                    break;
                  default:
                    return;
                }
              }
            } else if (this.CellEdited) {
              if (e.shiftKey) {
                switch (e.keyCode) {
                  case KEY_CODES.TAB:
                    e.preventDefault();
                    this.moveLeft();
                    break;
                  default:
                    return;
                }
              } else {
                switch (e.keyCode) {
                  case KEY_CODES.ENTER:
                    e.preventDefault();
                    this.selectCell(this.CellEdited);
                    break;
                  case KEY_CODES.TAB:
                    e.preventDefault();
                    this.moveRight();
                    break;
                  default:
                    return;
                }
              }
            }
          });
        }
        return;
      }

      destroy() {
        var column, l, len, ref;
        ref = this.ColumnHeader.GridColumns;
        for (l = 0, len = ref.length; l < len; l++) {
          column = ref[l];
          column.destroy();
        }
      }

      render(data) {
        var elTr, emptyRow, firstRow, frozenColumn, gridCell, groupValue, grouping, l, len, len1, len2, len3, len4, len5, len6, m, n, o, options, p, prev, q, r, ref, ref1, ref2, ref3, ref4, ref5, ref6, ref7, ref8, ref9, row, s;
        options = this.TableGrid.Options;
        $('tr.tablegrid-row', this.TableElement).remove();
        $('tr.tablegrid-grouprow', this.TableElement).remove();
        $('tr.tablegrid-parentrow', this.TableElement).remove();
        $('tr.tablegrid-firstrow', this.TableElement).remove();
        $('tr.tablegrid-emptyrow', this.TableElement).remove();
        this.Rows = [];
        if (data.rows && data.rows.length > 0) {
          if (options.groupColumn) {
            grouping = {};
            ref = data.rows;
            for (l = 0, len = ref.length; l < len; l++) {
              row = ref[l];
              groupValue = row[options.groupColumn];
              if (!grouping[groupValue]) {
                grouping[groupValue] = [];
              }
              grouping[groupValue].push(row);
            }
            for (p in grouping) {
              this.Rows.push(new RojobaCo.GridGroupRow(this, p, options));
              ref1 = grouping[p];
              for (m = 0, len1 = ref1.length; m < len1; m++) {
                row = ref1[m];
                if (ref2 = row.id, indexOf.call(this.RemovedIds, ref2) < 0) {
                  this.Rows.push(new RojobaCo.GridRow(this, row, options));
                }
              }
            }
          } else if (options.parentColumn) {
            prev = '';
            ref3 = data.rows;
            for (n = 0, len2 = ref3.length; n < len2; n++) {
              row = ref3[n];
              if (ref4 = row.id, indexOf.call(this.RemovedIds, ref4) < 0) {
                if (row[options.parentColumn] && prev !== row[options.parentColumn]) {
                  this.Rows.push(new RojobaCo.GridParentRow(this, row, options));
                }
                this.Rows.push(new RojobaCo.GridRow(this, row, options));
                prev = row[options.parentColumn];
              }
            }
          } else {
            ref5 = data.rows;
            for (o = 0, len3 = ref5.length; o < len3; o++) {
              row = ref5[o];
              if (ref6 = row.id, indexOf.call(this.RemovedIds, ref6) < 0) {
                this.Rows.push(new RojobaCo.GridRow(this, row, options));
              }
            }
          }
        }
        if (this.MultiSelectColumn) {
          this.MultiSelectColumn.render(this.Rows);
        }
        if (this.ActionColumn) {
          this.ActionColumn.render(this.Rows);
        }
        ref7 = this.FrozenColumns;
        for (q = 0, len4 = ref7.length; q < len4; q++) {
          frozenColumn = ref7[q];
          frozenColumn.render(this.Rows);
        }
        if (this.Rows.length > 0) {
          firstRow = new RojobaCo.GridFirstRow(this, options);
          firstRow.render(this.TableElement);
        }
        if (!options.edit && this.Rows.length === 0) {
          emptyRow = new RojobaCo.GridEmptyRow(this, options);
          emptyRow.render(this.TableElement);
        }
        ref8 = this.Rows;
        for (r = 0, len5 = ref8.length; r < len5; r++) {
          row = ref8[r];
          elTr = row.render();
          this.TableElement.append(elTr);
          if (row.GridCells) {
            ref9 = row.GridCells;
            for (s = 0, len6 = ref9.length; s < len6; s++) {
              gridCell = ref9[s];
              gridCell.render(elTr);
            }
          }
          if (options.draggableRows && !(row instanceof RojobaCo.GridGroupRow || row instanceof RojobaCo.GridParentRow) && (!options.beforeRowDrag || (options.beforeRowDrag && options.beforeRowDrag(row.Data)))) {
            elTr.draggable({
              axis: 'y',
              containment: 'parent',
              helper: 'clone',
              start: (evt, ui) => {
                $(evt.target).addClass('dragged-handle');
              },
              stop: (evt, ui) => {
                $(evt.target).removeClass('dragged-handle');
              }
            });
            elTr.droppable({
              accept: '.tablegrid-row',
              //tolerance: 'touch'
              drop: (evt, ui) => {
                var draggedRowId, droppedRowId;
                $(evt.target).before(ui.draggable);
                this.adjustSize();
                if (options.afterRowDrop) {
                  droppedRowId = $(evt.target).attr('id');
                  draggedRowId = ui.draggable.attr('id');
                  options.afterRowDrop(draggedRowId, droppedRowId);
                }
              }
            });
          }
        }
        if (!options.edit && this.Rows.length > 0) {
          this.GridFooter.update();
        }
        this.adjustSize();
      }

      onCellSelect(cell) {
        this.selectCell(cell);
      }

      onCellEdit(cell) {
        this.editCell(cell);
      }

      clearEditing() {
        var options;
        options = this.TableGrid.Options;
        $('div.tablegrid-cell-select').remove();
        $('div.tablegrid-cell-edit').remove();
        if (this.CellEdited) {
          if (this.CellEdited.HasValueChanged) {
            if (options.afterCellEdit) {
              options.afterCellEdit(this.CellEdited.GridRow.Id, this.CellEdited.Element, this.CellEdited.GridColumn.Name, this.CellEdited.Value, this.CellEdited.RowIndex, this.CellEdited.ColumnIndex);
            }
          }
          this.CellEdited.HasValueChanged = false;
        }
        this.CellSelected = null;
        this.CellEdited = null;
      }

      selectCell(cell) {
        var actionsWidth, el, firstColumn, frozenColumn, l, lastColumn, len, multiselectWidth, options, ref, scrollValue, selectedFrozenColumn, self;
        self = this;
        options = this.TableGrid.Options;
        self.clearEditing();
        this.CellSelected = cell;
        if (cell.GridColumn.Freeze) {
          selectedFrozenColumn = null;
          ref = this.FrozenColumns;
          for (l = 0, len = ref.length; l < len; l++) {
            frozenColumn = ref[l];
            if (frozenColumn.Column.Name === cell.GridColumn.Name) {
              selectedFrozenColumn = frozenColumn;
              break;
            }
          }
          if (selectedFrozenColumn) {
            el = $('td', $('tr', selectedFrozenColumn.TableElement).eq(cell.Element.parent().index() - 1))[0];
            $('<div>').addClass('tablegrid-cell-select').css('top', el.offsetTop).css('left', el.offsetLeft).css('width', el.offsetWidth).css('height', el.offsetHeight).on('click', function(e) {
              self.editCell(cell);
              e.stopPropagation();
            }).on('dblclick', function(e) {
              self.editCell(cell);
              e.stopPropagation();
            }).appendTo(selectedFrozenColumn.Detail);
          }
        } else {
          el = cell.Element[0];
          actionsWidth = 0;
          multiselectWidth = 0;
          if (options.rowActions.length > 0) {
            lastColumn = $('td', cell.Element.parent()).last();
            actionsWidth = lastColumn[0].offsetWidth;
          }
          if (options.multiselect) {
            firstColumn = $('td', cell.Element.parent()).first();
            multiselectWidth = firstColumn[0].offsetWidth;
          }
          scrollValue = (this.Detail[0].offsetWidth - actionsWidth) - (el.offsetLeft + el.offsetWidth);
          if (scrollValue < 0) {
            this.Detail[0].scrollLeft = Math.abs(scrollValue) + actionsWidth + this.Detail[0].scrollLeft;
          } else if (this.Detail[0].scrollLeft > 0) {
            this.Detail[0].scrollLeft = el.offsetLeft - multiselectWidth;
          }
          $('<div>').addClass('tablegrid-cell-select').css('top', el.offsetTop).css('left', el.offsetLeft).css('width', el.offsetWidth).css('height', el.offsetHeight).on('click', function(e) {
            self.editCell(cell);
            e.stopPropagation();
          }).on('dblclick', function(e) {
            self.editCell(cell);
            e.stopPropagation();
          }).appendTo(this.Detail);
        }
        if (options.editOnSelect) {
          self.editCell(cell);
        }
      }

      editCell(cell) {
        var applyChange, el, frozenColumn, input, inputContainer, l, len, options, ref, selectedFrozenColumn;
        options = this.TableGrid.Options;
        if (!cell.GridColumn.Readonly && !(options.canEditRow && !options.canEditRow(cell.GridRow.Id))) {
          this.clearEditing();
          this.CellEdited = cell;
          applyChange = (value) => {
            var canEdit, cellValue, column, index, l, len, readOnlyCell, ref, renderedValue;
            canEdit = !options.beforeCellEdit;
            if (options.beforeCellEdit) {
              canEdit = options.beforeCellEdit(this.CellEdited.GridRow.Id, this.CellEdited.Element, this.CellEdited.GridColumn.Name, this.CellEdited.Value, value, this.CellEdited.RowIndex, this.CellEdited.ColumnIndex);
            }
            if (canEdit) {
              cell.Value = value;
              cell.HasValueChanged = true;
              if (cell.GridColumn.ValueChanged) {
                cell.GridColumn.ValueChanged(cell.GridRow.Data, value);
              } else {
                cell.GridRow.Data[cell.GridColumn.Name] = value;
              }
              ref = this.ColumnHeader.GridColumns;
              for (index = l = 0, len = ref.length; l < len; index = ++l) {
                column = ref[index];
                if (column.Readonly && column.GetValue) {
                  cellValue = column.GetValue(cell.GridRow.Data);
                  readOnlyCell = cell.GridRow.GridCells[index];
                  cell.GridRow.Data[column.Name] = cellValue;
                  readOnlyCell.Element.html(cellValue);
                }
              }
              el.innerText = value;
              cell.Element[0].innerText = value;
              if (options.renderCell) {
                renderedValue = options.renderCell(this.CellEdited.GridRow.Data, this.CellEdited.Element, this.CellEdited.GridColumn.Name, this.CellEdited.RowIndex, this.CellEdited.ColumnIndex);
                if (renderedValue) {
                  el.innerText = renderedValue;
                  cell.Element[0].innerText = renderedValue;
                }
              }
              if (this.CellEdited.GridColumn.Render) {
                renderedValue = this.CellEdited.GridColumn.Render(this.CellEdited.GridRow.Data);
                if (renderedValue) {
                  el.innerText = renderedValue;
                  cell.Element[0].innerText = renderedValue;
                }
              }
              $(el).attr('title', el.innerText);
              cell.Element.attr('title', el.innerText);
              this.TableGrid.Edited = true;
            }
          };
          if (cell.GridColumn.Freeze) {
            selectedFrozenColumn = null;
            ref = this.FrozenColumns;
            for (l = 0, len = ref.length; l < len; l++) {
              frozenColumn = ref[l];
              if (frozenColumn.Column.Name === cell.GridColumn.Name) {
                selectedFrozenColumn = frozenColumn;
                break;
              }
            }
            if (selectedFrozenColumn) {
              el = $('td', $('tr', selectedFrozenColumn.TableElement).eq(cell.Element.parent().index() - 1))[0];
              inputContainer = $('<div>').addClass('tablegrid-cell-edit').css('top', el.offsetTop).css('left', el.offsetLeft).css('width', el.offsetWidth).css('height', el.offsetHeight).appendTo(selectedFrozenColumn.Detail);
              input = cell.GridColumn.getInput(cell.Value, (value) => {
                applyChange(value);
              });
              if (input) {
                input.css('height', el.offsetHeight).appendTo(inputContainer);
                $(':input', input).css('height', el.offsetHeight).focus();
              }
            }
          } else {
            el = cell.Element[0];
            inputContainer = $('<div>').addClass('tablegrid-cell-edit').css('top', el.offsetTop).css('left', el.offsetLeft).css('width', el.offsetWidth).css('height', el.offsetHeight).appendTo(this.Detail);
            input = cell.GridColumn.getInput(cell.Value, (value) => {
              applyChange(value);
            });
            /*
            if e.shiftKey
                switch e.keyCode
                    when KEY_CODES.TAB
                        applyChange value                            
                        this.moveLeft()
                    else 
                        return
            else
                switch e.keyCode
                    when KEY_CODES.ENTER
                        applyChange value
                    when KEY_CODES.TAB
                        applyChange value                            
                        this.moveRight()
                    else 
                        return
            */
            if (input) {
              input.css('height', el.offsetHeight).appendTo(inputContainer);
              $(':input', input).css('height', el.offsetHeight).focus();
            }
          }
        }
      }

      updateCell(cell, value) {
        var el, options;
        options = this.TableGrid.Options;
        el = cell.Element[0];
        el.innerText = value;
        cell.Value = value;
        cell.HasValueChanged = true;
        cell.GridRow.Data[cell.GridColumn.Name] = value;
      }

      moveLeft() {
        var cell, row;
        if (this.CellEdited) {
          if (this.CellEdited.ColumnIndex === 1) {
            return;
          }
          row = this.Rows[this.CellEdited.RowIndex];
          cell = row.GridCells[this.CellEdited.ColumnIndex - 1];
          this.editCell(cell);
        } else if (this.CellSelected) {
          if (this.CellSelected.ColumnIndex === 1) {
            return;
          }
          row = this.Rows[this.CellSelected.RowIndex];
          cell = row.GridCells[this.CellSelected.ColumnIndex - 1];
          this.selectCell(cell);
        }
      }

      moveUp() {
        var cell, row;
        if (this.CellSelected.RowIndex === 0) {
          return;
        }
        row = this.Rows[this.CellSelected.RowIndex - 1];
        cell = row.GridCells[this.CellSelected.ColumnIndex];
        this.selectCell(cell);
      }

      moveRight() {
        var cell, options, row, skipColumns;
        options = this.TableGrid.Options;
        skipColumns = 1;
        if (options.rowActions.length > 0) {
          skipColumns = 2;
        }
        if (this.CellEdited) {
          if (this.CellEdited.ColumnIndex === this.ColumnHeader.GridColumns.length - skipColumns) {
            return;
          }
          row = this.Rows[this.CellEdited.RowIndex];
          cell = row.GridCells[this.CellEdited.ColumnIndex + 1];
          this.editCell(cell);
        } else if (this.CellSelected) {
          if (this.CellSelected.ColumnIndex === this.ColumnHeader.GridColumns.length - skipColumns) {
            return;
          }
          row = this.Rows[this.CellSelected.RowIndex];
          cell = row.GridCells[this.CellSelected.ColumnIndex + 1];
          this.selectCell(cell);
        }
      }

      moveDown(cell, view) {
        var row;
        if (this.CellSelected.RowIndex === this.Rows.length - 1) {
          return;
        }
        row = this.Rows[this.CellSelected.RowIndex + 1];
        cell = row.GridCells[this.CellSelected.ColumnIndex];
        this.selectCell(cell);
      }

      reset() {
        this.GridFooter.reset();
      }

      addRow(row) {
        var elTr, firstRow, gridCell, gridRow, l, len, options, ref;
        options = this.TableGrid.Options;
        $('.tablegrid-emptyrow', this.TableGrid.View).remove();
        if (this.Rows.length === 0) {
          firstRow = new RojobaCo.GridFirstRow(this, options);
          firstRow.render(this.TableElement);
        }
        gridRow = new RojobaCo.GridRow(this, row, options);
        elTr = gridRow.render();
        this.TableElement.append(elTr);
        ref = gridRow.GridCells;
        for (l = 0, len = ref.length; l < len; l++) {
          gridCell = ref[l];
          gridCell.render(elTr);
        }
        this.Rows.push(gridRow);
        this.TableGrid.Data.rows.push(row);
        this.TableGrid.Element.val(this.TableGrid.Data.rows.length);
        if (this.MultiSelectColumn) {
          this.MultiSelectColumn.addRow(gridRow);
        }
        if (this.ActionColumn) {
          this.ActionColumn.addRow(gridRow);
        }
        this.adjustSize();
      }

      updateRow(row) {
        var afterTr, column, elTr, gridCell, gridRow, i, j, key, l, len, len1, len2, m, n, options, ref, ref1, ref2, rowId, value;
        options = this.TableGrid.Options;
        rowId = row[options.idColumn].toString();
        ref = this.Rows;
        for (i = l = 0, len = ref.length; l < len; i = ++l) {
          gridRow = ref[i];
          if (!(gridRow instanceof RojobaCo.GridParentRow)) {
            if (gridRow.Id.toString() === rowId) {
              for (key in row) {
                value = row[key];
                ref1 = this.ColumnHeader.GridColumns;
                //@TableGrid.Data.rows[i][key] = value
                for (j = m = 0, len1 = ref1.length; m < len1; j = ++m) {
                  column = ref1[j];
                  if (column.Name === key) {
                    gridRow.Data[column.Name] = value;
                    gridRow.GridCells[j].Value = value;
                    break;
                  }
                }
              }
              elTr = gridRow.render();
              afterTr = $('tr#' + gridRow.Id, this.TableElement).prev();
              $('tr#' + gridRow.Id, this.TableElement).remove();
              //if afterTr.length is 0 or afterTr.hasClass('tablegrid-firstrow')
              //    elTr.prependTo $('tbody', @TableElement)
              //else
              elTr.insertAfter(afterTr);
              ref2 = gridRow.GridCells;
              for (n = 0, len2 = ref2.length; n < len2; n++) {
                gridCell = ref2[n];
                gridCell.render(elTr);
              }
              if (this.MultiSelectColumn) {
                this.MultiSelectColumn.updateRow(row);
              }
              if (this.ActionColumn) {
                this.ActionColumn.updateRow(row);
              }
              break;
            }
          }
        }
        this.adjustSize();
      }

      removeRow(id) {
        var frozenColumn, gridRow, i, l, len, len1, m, ref, ref1;
        ref = this.Rows;
        for (i = l = 0, len = ref.length; l < len; i = ++l) {
          gridRow = ref[i];
          if (gridRow.Id.toString() === id.toString()) {
            this.TableGrid.Data.rows.splice(i, 1);
            this.Rows.splice(i, 1);
            $('tr#' + gridRow.Id, this.TableGrid.View).remove();
            $('tr#C_' + gridRow.Id, this.TableGrid.View).remove();
            $('tr#R_' + gridRow.Id, this.TableGrid.View).remove();
            $('tr#A_' + gridRow.Id, this.TableGrid.View).remove();
            ref1 = this.FrozenColumns;
            for (m = 0, len1 = ref1.length; m < len1; m++) {
              frozenColumn = ref1[m];
              $('tr#F_' + frozenColumn.Column.Name + '_' + gridRow.Id, this.TableGrid.View).remove();
            }
            this.RemovedIds.push(id);
            break;
          }
        }
        if (this.TableGrid.Data.rows.length > 0) {
          this.TableGrid.Element.val(this.TableGrid.Data.rows.length);
        } else {
          this.TableGrid.Element.val('');
          this.render(this.TableGrid.Data);
        }
        this.adjustSize();
      }

      adjustSize() {
        var setHeaderHeight, setHeaderWidth, setRowHeight;
        $('tr.tablegrid-row, tr.tablegrid-grouprow, tr.tablegrid-parentrow, tr.tablegrid-multiselect-row, tr.tablegrid-multiselect-grouprow, tr.tablegrid-multiselect-parentrow, tr.tablegrid-action-row, tr.tablegrid-action-grouprow, tr.tablegrid-action-parentrow', this.TableGrid.View).css('height', '');
        $('div.tablegrid-multiselect-header th, div.tablegrid-action-header th', this.TableGrid.View).css('height', '');
        setHeaderHeight = () => {
          var headerHeight;
          headerHeight = $('div.tablegrid-header', this.TableGrid.View).height() - 1;
          $('div.tablegrid-multiselect-header th, div.tablegrid-frozen-header th, div.tablegrid-action-header th', this.TableGrid.View).css('height', headerHeight + 'px');
        };
        setHeaderWidth = (indx, td) => {
          $('div.tablegrid-header th.tablegrid-column', this.TableGrid.View).eq(indx).css('width', $(td).outerWidth() + 'px');
        };
        setRowHeight = (indx, tr) => {
          var rowHeight, tempHeight;
          rowHeight = $(tr).height();
          if (this.MultiSelectColumn) {
            tempHeight = $('tr.tablegrid-multiselect-row', this.TableGrid.View).eq(indx).height();
            if (tempHeight > rowHeight) {
              rowHeight = tempHeight;
            }
          }
          if (this.ActionColumn) {
            tempHeight = $('tr.tablegrid-action-row', this.TableGrid.View).eq(indx).height();
            if (tempHeight > rowHeight) {
              rowHeight = tempHeight;
            }
          }
          if (this.MultiSelectColumn) {
            $('tr.tablegrid-multiselect-row, tr.tablegrid-multiselect-grouprow, tr.tablegrid-multiselect-parentrow', this.TableGrid.View).eq(indx).css('height', rowHeight + 'px');
          }
          if (this.ActionColumn) {
            $('tr.tablegrid-action-row, tr.tablegrid-action-grouprow, tr.tablegrid-action-parentrow', this.TableGrid.View).eq(indx).css('height', rowHeight + 'px');
          }
          if (this.FrozenColumns.length > 0) {
            $('tr.tablegrid-frozen-row, tr.tablegrid-frozen-grouprow, tr.tablegrid-parentrow', this.TableGrid.View).eq(indx).css('height', rowHeight + 'px');
          }
          $(tr).css('height', rowHeight + 'px');
        };
        setTimeout(() => {
          var availableWidth, column, frozenColumn, index, l, len, len1, len2, len3, len4, m, n, o, q, ref, ref1, ref2, ref3, ref4, td, totalWidth;
          $('tr.tablegrid-row, tr.tablegrid-grouprow', this.TableGrid.View).each(function(indx, tr) {
            setRowHeight(indx, tr);
          });
          totalWidth = 0;
          ref = this.ColumnHeader.GridColumns;
          for (l = 0, len = ref.length; l < len; l++) {
            column = ref[l];
            if (column.Name !== 'multiselect' && column.Name !== 'action') {
              column.NewWidth = 0;
              totalWidth += parseInt(column.Width);
            }
          }
          //what about options.width?
          if (totalWidth > 0 && totalWidth < this.TableElement.parent().outerWidth()) {
            availableWidth = this.TableElement.parent().outerWidth();
            if (this.MultiSelectColumn) {
              availableWidth -= this.MultiSelectColumn.Container.outerWidth();
            }
            if (this.ActionColumn) {
              availableWidth -= this.ActionColumn.Container.outerWidth();
            }
            ref1 = this.ColumnHeader.GridColumns;
            for (m = 0, len1 = ref1.length; m < len1; m++) {
              column = ref1[m];
              if (column.Name !== 'multiselect' && column.Name !== 'action') {
                column.NewWidth = parseInt((column.Width / totalWidth) * availableWidth);
              }
            }
            totalWidth = this.TableElement.parent().outerWidth();
          }
          ref2 = this.ColumnHeader.GridColumns;
          for (index = n = 0, len2 = ref2.length; n < len2; index = ++n) {
            column = ref2[index];
            td = $('td', $('tr.tablegrid-firstrow', this.TableGrid.View)).eq(index);
            if (column.Name === 'multiselect') {
              td.css('width', this.MultiSelectColumn.Container.outerWidth() + 'px');
            } else if (column.Name === 'action') {
              td.css('width', this.ActionColumn.Container.outerWidth() + 'px');
            } else if (column.NewWidth && column.NewWidth > 0) {
              td.css('width', column.NewWidth + 'px');
            } else {
              td.css('width', column.Width + 'px');
            }
          }
          if (totalWidth > 0) {
            this.TableElement.css('width', totalWidth + 'px');
          }
          ref3 = this.FrozenColumns;
          for (o = 0, len3 = ref3.length; o < len3; o++) {
            frozenColumn = ref3[o];
            ref4 = this.ColumnHeader.GridColumns;
            for (q = 0, len4 = ref4.length; q < len4; q++) {
              column = ref4[q];
              if (frozenColumn.Column.Name === column.Name) {
                frozenColumn.Container.css('width', column.Width + 'px');
                frozenColumn.Container.css('right', this.ActionColumn.Container.outerWidth() + 'px');
                break;
              }
            }
          }
          $('tr.tablegrid-firstrow td', this.TableGrid.View).each(function(indx, td) {
            setHeaderWidth(indx, td);
          });
          this.ColumnHeader.TableElement.css('width', this.TableElement.outerWidth() + 'px');
          setHeaderHeight();
        }, 1);
      }

    };

    Grid.TableElement = null;

    Grid.CellSelected = null;

    Grid.CellEdited = null;

    Grid.Detail = null;

    KEY_CODES = {
      TAB: 9,
      ENTER: 13,
      ESCAPE: 27,
      ARROW_LEFT: 37,
      ARROW_UP: 38,
      ARROW_RIGHT: 39,
      ARROW_DOWN: 40,
      F2: 113
    };

    return Grid;

  }).call(this);

  RojobaCo.GridActionColumn = (function() {
    class GridActionColumn {
      constructor(TableGrid) {
        var detail, detailbox, header, headerbox, headertable, options, thead, trow;
        this.TableGrid = TableGrid;
        options = this.TableGrid.Options;
        this.Container = $('<div>').addClass('tablegrid-action').appendTo(this.TableGrid.View);
        if (options.hide) {
          this.Container.css('display', 'none');
        }
        header = $('<div>').addClass('tablegrid-action-header').appendTo(this.Container);
        headerbox = $('<div>').addClass('tablegrid-action-header-box').appendTo(header);
        headertable = $('<table>').addClass('table').appendTo(headerbox);
        thead = $('<thead>').appendTo(headertable);
        trow = $('<tr>').appendTo(thead);
        $('<th>').addClass('tablegrid-column action-header').css('w class="nav-item"idth', '1px').html('<span>Actions</span>').appendTo(trow);
        detail = $('<div>').addClass('tablegrid-action-detail').appendTo(this.Container);
        detailbox = $('<div>').addClass('tablegrid-action-detail-box').appendTo(detail);
        this.TableElement = $('<table>').addClass('table').appendTo(detailbox);
        return;
      }

      render(rows) {
        var l, len, row;
        $('tr.tablegrid-action-row', this.TableElement).remove();
        $('tr.tablegrid-action-grouprow', this.TableElement).remove();
        $('tr.tablegrid-action-parentrow', this.TableElement).remove();
        for (l = 0, len = rows.length; l < len; l++) {
          row = rows[l];
          this.addRow(row);
        }
      }

      addRow(row) {
        var action, actionClick, button, buttons, disabled, hidden, l, len, options, parentClass, ref, td, tr;
        options = this.TableGrid.Options;
        tr = $('<tr>').attr('id', 'A_' + row.Id).appendTo(this.TableElement);
        td = $('<td>').appendTo(tr);
        hidden = false;
        if (options.rowDisabled && options.rowDisabled(row.Data)) {
          hidden = true;
        }
        if (row instanceof RojobaCo.GridGroupRow) {
          hidden = true;
          tr.addClass('tablegrid-action-grouprow');
        } else if (row instanceof RojobaCo.GridParentRow) {
          if (options.hideParent) {
            tr.addClass('tablegrid-action-parentrow hidden');
          } else {
            tr.addClass('tablegrid-action-parentrow');
          }
          tr.attr('id', 'A_' + row.Data[options.parentColumn]);
        } else {
          parentClass = '';
          if (options.parentColumn) {
            parentClass = ' ' + row.Data[options.parentColumn];
          }
          tr.addClass('tablegrid-action-row' + parentClass);
          if (options.parentColumn && !options.expandParentColumns) {
            tr.hide();
          }
        }
        actionClick = (e) => {
          var action, iconClass, id, l, len, ref, rowId;
          id = $(e.target).closest('tr').attr('id');
          options = this.TableGrid.Options;
          iconClass = '';
          if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON') {
            iconClass = $('i', $(e.target)).attr('class');
          } else {
            iconClass = $(e.target).attr('class');
          }
          ref = options.rowActions;
          for (l = 0, len = ref.length; l < len; l++) {
            action = ref[l];
            if (iconClass.indexOf(action.icon) !== -1) {
              rowId = id.substring(2, id.length);
              action.onClick(rowId);
              if (options.afterRowAction) {
                options.afterRowAction(rowId, action.name);
              }
              break;
            }
          }
          e.stopPropagation();
        };
        if (options.rowActions.length > 0 && hidden !== true) {
          buttons = $('<div>').addClass('tablegrid-action-buttons btn-group').attr('role', 'group').appendTo(td);
          ref = options.rowActions;
          for (l = 0, len = ref.length; l < len; l++) {
            action = ref[l];
            hidden = false;
            if (action.hidden) {
              hidden = action.hidden(row.Data);
            }
            disabled = false;
            if (action.disabled) {
              disabled = action.disabled(row.Data);
            }
            if (hidden !== true) {
              button = $('<a>').attr('href', 'javascript:void(0);').attr('title', action.title).appendTo(buttons);
              if (action.caption && action.caption.length > 0) {
                button.html('<i class="fa fa-' + action.icon + '"></i>&nbsp;' + action.caption);
              } else {
                button.addClass('btn btn-default btn-secondary').html('<i class="fa fa-' + action.icon + '"></i>');
              }
              if (action.cssClass && action.cssClass.length > 0) {
                button.addClass(action.cssClass);
              }
              if (disabled === true) {
                button.addClass('disabled');
              } else {
                button.on('click', actionClick);
              }
            }
          }
        } else {
          td.html('&nbsp;');
        }
      }

      updateRow(row) {
        var action, actionClick, afterTr, button, buttons, disabled, hidden, l, len, options, ref, rowId, td, tr;
        options = this.TableGrid.Options;
        rowId = row[options.idColumn];
        afterTr = $('tr#A_' + rowId, this.TableElement).prev();
        $('tr#A_' + rowId, this.TableElement).remove();
        tr = $('<tr>').attr('id', 'A_' + rowId).addClass('tablegrid-action-row');
        if (afterTr.length === 0) {
          tr.prependTo(this.TableElement);
        } else {
          tr.insertAfter(afterTr);
        }
        td = $('<td>').appendTo(tr);
        hidden = false;
        if (options.rowDisabled && options.rowDisabled(row)) {
          hidden = true;
        }
        actionClick = (e) => {
          var action, iconClass, id, l, len, ref;
          id = $(e.target).closest('tr').attr('id');
          options = this.TableGrid.Options;
          iconClass = '';
          if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON') {
            iconClass = $('i', $(e.target)).attr('class');
          } else {
            iconClass = $(e.target).attr('class');
          }
          ref = options.rowActions;
          for (l = 0, len = ref.length; l < len; l++) {
            action = ref[l];
            if (iconClass.indexOf(action.icon) !== -1) {
              rowId = id.substring(2, id.length);
              action.onClick(rowId);
              if (options.afterRowAction) {
                options.afterRowAction(rowId, action.name);
              }
              break;
            }
          }
          e.stopPropagation();
        };
        if (options.rowActions.length > 0 && hidden !== true) {
          buttons = $('<div>').addClass('tablegrid-action-buttons btn-group').attr('role', 'group').css('float', 'left').appendTo(td);
          ref = options.rowActions;
          for (l = 0, len = ref.length; l < len; l++) {
            action = ref[l];
            hidden = false;
            if (action.hidden) {
              hidden = action.hidden(row);
            }
            disabled = false;
            if (action.disabled) {
              disabled = action.disabled(row);
            }
            if (hidden !== true) {
              button = $('<a>').attr('href', 'javascript:void(0);').attr('title', action.title).appendTo(buttons);
              if (action.caption && action.caption.length > 0) {
                button.html('<i class="fa fa-' + action.icon + '"></i>&nbsp;' + action.caption);
              } else {
                button.addClass('btn btn-default btn-secondary').html('<i class="fa fa-' + action.icon + '"></i>');
              }
              if (action.cssClass && action.cssClass.length > 0) {
                button.addClass(action.cssClass);
              }
              if (disabled === true) {
                button.addClass('disabled');
              } else {
                button.on('click', actionClick);
              }
            }
          }
        } else {
          td.html('&nbsp;');
        }
      }

    };

    GridActionColumn.TableElement = null;

    GridActionColumn.Container = null;

    return GridActionColumn;

  }).call(this);

  RojobaCo.GridCell = (function() {
    class GridCell {
      constructor(GridColumn, GridRow) {
        this.GridColumn = GridColumn;
        this.GridRow = GridRow;
        this.Value = this.GridRow.Data[this.GridColumn.Name];
        this.HasValueChanged = false;
      }

      render(element) {
        var options, renderedValue, value;
        options = this.GridColumn.TableGrid.Options;
        value = this.GridRow.Data[this.GridColumn.Name];
        if (this.GridColumn.Render) {
          value = this.GridColumn.Render(this.GridRow.Data);
        }
        if (this.GridColumn.Name === 'multiselect' || this.GridColumn.Name === 'review' || this.GridColumn.Name === 'action') {
          $('<td>').appendTo(element);
        } else {
          this.Element = $('<td>').appendTo(element);
          this.RowIndex = element.index() - 1; // -1 to exclude FirstRow
          this.ColumnIndex = this.Element.index();
          if (options.renderCell) {
            renderedValue = options.renderCell(this.GridRow.Data, this.Element, this.GridColumn.Name, this.RowIndex, this.ColumnIndex);
            if (renderedValue) {
              value = renderedValue;
            }
          }
          if (options.edit) {
            this.Element.on('click', (e) => {
              this.GridColumn.TableGrid.Grid.onCellSelect(this);
              e.stopPropagation();
            });
          }
          if (this.GridColumn.DataType === 'image') {
            if (this.GridRow.Data[this.GridColumn.Name]) {
              value = '<img src="' + value + '" alt="' + this.GridColumn.Name + ' image" />';
            }
          } else if (!this.GridColumn.Render) {
            this.Element.attr('title', value);
          }
          if (this.GridColumn.DataType === 'link') {
            $('<a>').attr('href', 'javascript:void(0);').html(value).on('click', (e) => {
              if (options.onLink) {
                options.onLink(this.GridRow.Id, this.Element, this.GridColumn.Name, this.Value, this.RowIndex, this.ColumnIndex);
              }
            }).appendTo(this.Element);
          } else {
            if (value) {
              this.Element.html(value);
            } else {
              this.Element.html('&nbsp;');
            }
          }
          if (options.afterCellCreate) {
            options.afterCellCreate(this.GridRow.Id, this.Element, this.GridColumn.Name, this.Value, this.RowIndex, this.ColumnIndex);
          }
        }
      }

    };

    GridCell.RowIndex = -1;

    GridCell.ColumnIndex = -1;

    GridCell.Element = null;

    return GridCell;

  }).call(this);

  RojobaCo.GridColumn = (function() {
    var addCheckbox, addDivider, bindBoolFilter, bindColumnFilter, bindDateFilter, bindNumberFilter, bindSetFilter, bindTextFilter, buildBoolFilter, buildBooleanInput, buildColumnFilter, buildCurrencyInput, buildDateFilter, buildDateInput, buildFilter, buildFloatInput, buildIntegerInput, buildNumberFilter, buildSelectInput, buildSetFilter, buildStringInput, buildTextFilter, buildTimeInput;

    class GridColumn {
      constructor(TableGrid, column) {
        this.TableGrid = TableGrid;
        this.Name = column.name;
        this.Caption = column.caption;
        this.Align = column.align;
        this.DataType = column.dataType;
        this.Readonly = column.readonly;
        if (column.inputType) {
          this.InputType = column.inputType;
        } else {
          this.InputType = column.dataType;
        }
        this.Width = column.width;
        this.Height = column.height;
        this.Render = column.render;
        this.GetValue = column.getValue;
        this.DataKey = column.dataKey;
        this.Freeze = column.freeze;
        return;
      }

      destroy() {
        if (this.Element.is('[data-original-title]')) {
          this.Element.popover('destroy');
        }
      }

      getInput(value, callback) {
        switch (this.InputType) {
          case 'select':
            return buildSelectInput(value, callback, this);
          default:
            switch (this.DataType) {
              case 'int':
                return buildIntegerInput(value, callback);
              case 'float':
                return buildFloatInput(value, callback);
              case 'date':
                return buildDateInput(value, callback);
              case 'time':
                return buildTimeInput(value, callback);
              case 'currency':
                return buildCurrencyInput(value, callback, this);
              case 'image':
                return null;
              case 'bool':
                return buildBooleanInput(value, callback);
              default:
                return buildStringInput(value, callback);
            }
        }
      }

      render(element) {
        var filterDiv, filterId, filterValueId, options;
        options = this.TableGrid.Options;
        if (this.Name === 'multiselect') {
          this.Element = $('<th>').addClass('tablegrid-column').css('width', '1px').appendTo(element);
          return;
        }
        if (this.Name === 'action') {
          this.Element = $('<th>').addClass('tablegrid-column').css('width', '1px').appendTo(element);
          return;
        }
        this.Element = $('<th>').addClass('tablegrid-column column-header-' + this.Caption.replace(' ', '').toLowerCase()).html('<span>' + this.Caption + '</span><i class="sort-icon hidden"></i><i class="filter-icon hidden"></i>').appendTo(element);
        if (this.Width) {
          this.Element.css('width', this.Width + 'px');
        }
        if (!options.filter || this.DataType === 'int' || this.DataType === 'float' || this.DataType === 'date' || this.DataType === 'currency' || this.Name === 'multiselect' || this.Name === 'action') {
          return;
        }
        filterId = this.TableGrid.Element.attr('id') + '-filter-' + this.Name;
        filterValueId = this.TableGrid.Element.attr('id') + '-filtervalue-' + this.Name;
        filterDiv = $('<i>').attr('id', filterId).addClass('fa fa-caret-down').appendTo(this.Element);
        this.Element.on('click', (e) => {
          $('div.tablegrid-columnfilter').each(function(index) {
            var popover;
            if ($(this).attr('id') !== $(e.target).parents('div.tablegrid-columnfilter').attr('id')) {
              popover = $('button', $(this)).data('bs.popover');
              if (popover && popover.tip) {
                $('button', $(this)).popover('hide');
              }
            }
          });
          if (!this.Element.is('[data-original-title]')) {
            this.Element.popover({
              container: 'body',
              title: this.Caption + ' setting',
              html: true,
              placement: 'bottom',
              content: () => {
                return buildFilter(this.TableGrid, this.Element, this.Name, this.Caption);
              }
            });
            this.Element.on('shown.bs.popover', (e) => {
              //popover = $(e.target).data('bs.popover').$tip
              $('#' + filterId + '-asc').off('click').on('click', (e) => {
                $('i.sort-icon', this.Element).removeClass('fa-sort-alpha-up').addClass('fa-sort-alpha-down');
                this.TableGrid.Sort[this.Name] = 'ASC';
                this.TableGrid.refresh();
              });
              $('#' + filterId + '-desc').off('click').on('click', (e) => {
                $('i.sort-icon', this.Element).removeClass('fa-sort-alpha-down').addClass('fa-sort-alpha-up');
                this.TableGrid.Sort[this.Name] = 'DESC';
                this.TableGrid.refresh();
              });
              $('#' + filterValueId).off('keydown').on('keydown', (e) => {
                clearTimeout(this.TableGrid.searching);
                this.TableGrid.searching = setTimeout((() => {
                  var value;
                  value = $(e.target).val();
                  $('i.filter-icon', this.Element).removeClass('fa-filter');
                  delete this.TableGrid.Filter[this.Name];
                  if (value && value.length > 0) {
                    $('i.filter-icon', this.Element).addClass('fa-filter');
                    if (this.TableGrid.Filter[this.Name] !== value) {
                      this.TableGrid.Filter[this.Name] = value;
                    }
                  }
                  this.TableGrid.refresh();
                }), 300);
              });
            });
            this.Element.popover('show');
          }
          e.stopPropagation();
        });
        $(document).on('click', (e) => {
          var targetDropdown;
          targetDropdown = $(e.target).parents('div.tablegrid-columnfilter');
          if (!($(e.target).is(':input') && this.Element.is('[aria-describedby]'))) {
            this.Element.popover('hide');
          }
        });
      }

    };

    GridColumn.Element = null;

    buildFilter = function(tableGrid, element, name, caption) {
      var container, custom, filterId, filterValueId, input, menu, parent;
      filterId = tableGrid.Element.attr('id') + '-filter-' + name;
      filterValueId = tableGrid.Element.attr('id') + '-filtervalue-' + name;
      parent = $('<div>');
      menu = $('<div>').appendTo(parent);
      $('<a>').attr('id', filterId + '-asc').attr('href', 'javascript:void(0);').addClass('dropdown-item').html('<i class="fa fa-sort-alpha-down" style="margin-right: 5px;"></i>Sort ascending').appendTo(menu);
      $('<a>').attr('id', filterId + '-desc').attr('href', 'javascript:void(0);').addClass('dropdown-item').html('<i class="fa fa-sort-alpha-up" style="margin-right: 5px;"></i>Sort descending').appendTo(menu);
      $('<div>').addClass('dropdown-divider').appendTo(menu);
      custom = $('<div>').appendTo(menu);
      container = $('<div>').addClass('tablegrid-columnfilter-container').appendTo(custom);
      $('<span>').text('Filter: ').appendTo(container);
      input = $('<input>').attr('type', 'text').attr('id', filterValueId).attr('placeholder', 'Search ' + caption).appendTo(container);
      return parent.html();
    };

    buildIntegerInput = function(value, callback) {
      var group, input;
      group = $('<div>');
      input = $('<input>').attr('type', 'text').attr('value', value).on('click', function(e) {
        e.stopPropagation();
      }).on('change', function(e) {
        callback(input.autoNumeric('get'));
      }).on('keydown', function(e) {
        callback(input.autoNumeric('get'));
      }).appendTo(group);
      input.autoNumeric('init', {
        aSep: '',
        mDec: 0
      });
      return group;
    };

    buildFloatInput = function(value, callback) {
      var group, input;
      group = $('<div>');
      input = $('<input>').attr('type', 'text').attr('value', value).on('click', function(e) {
        e.stopPropagation();
      }).on('change', function(e) {
        callback(input.autoNumeric('get'));
      }).on('keydown', function(e) {
        callback(input.autoNumeric('get'));
      }).appendTo(group);
      input.autoNumeric('init', {
        aSep: ''
      });
      return group;
    };

    buildBooleanInput = function(value, callback) {
      var boolValue, group, input;
      group = $('<div>');
      boolValue = false;
      if ($.isNumeric(value)) {
        boolValue = value === 1;
      } else {
        boolValue = value === 'true' || value === true;
      }
      input = $('<input>').attr('type', 'checkbox').prop('checked', boolValue).on('click', function(e) {
        e.stopPropagation();
      }).on('change', function(e) {
        callback(input.is(':checked'));
      }).on('keydown', function(e) {
        callback(input.is(':checked'));
      }).appendTo(group);
      return group;
    };

    buildStringInput = function(value, callback) {
      var group;
      group = $('<div>');
      $('<input>').attr('type', 'text').attr('value', value).on('click', function(e) {
        e.stopPropagation();
      }).on('change', function(e) {
        callback($(e.target).val());
      }).on('keydown', function(e) {
        callback($(e.target).val());
      }).appendTo(group);
      return group;
    };

    buildSelectInput = function(value, callback, self) {
      var group, input, item, l, len, ref;
      group = $('<div>');
      input = $('<select>').on('click', function(e) {
        e.stopPropagation();
      }).on('change', function(e) {
        callback($(e.target).val());
      }).on('keydown', function(e) {
        callback($(e.target).val());
      }).appendTo(group);
      input.append('<option value="" disabled selected hidden>Please select option</option>');
      if (self.TableGrid.Options.selectData) {
        ref = self.TableGrid.Options.selectData[self.DataKey];
        for (l = 0, len = ref.length; l < len; l++) {
          item = ref[l];
          input.append('<option value="' + item.value + '">' + item.label + '</option>');
        }
      }
      input.val(value);
      return group;
    };

    buildDateInput = function(value, callback) {
      var group, input;
      group = $('<div>').addClass('input-group');
      input = $('<input>').attr('type', 'text').attr('value', value).on('click', function(e) {
        e.stopPropagation();
      }).appendTo(group);
      $('<span>').addClass('input-group-addon').html('<span class="glyphicon glyphicon-calendar"></span>').appendTo(group);
      input.datetimepicker({
        format: 'YYYY-MM-DD',
        ignoreReadonly: true,
        allowInputToggle: true
      });
      input.on('dp.change', function(e) {
        callback($(e.target).val());
      });
      return group;
    };

    buildTimeInput = function(value, callback) {
      var group, input;
      group = $('<div>').addClass('input-group');
      input = $('<input>').attr('type', 'text').attr('value', value).on('click', function(e) {
        e.stopPropagation();
      }).appendTo(group);
      $('<span>').addClass('input-group-addon').html('<span class="glyphicon glyphicon-calendar"></span>').appendTo(group);
      input.datetimepicker({
        format: 'HH:mm',
        ignoreReadonly: true,
        allowInputToggle: true
      });
      input.on('dp.change', function(e) {
        callback($(e.target).val());
      });
      return group;
    };

    buildCurrencyInput = function(value, callback, items) {
      var amount, btnGroup, currency, group, input, item, l, len, parts, ul;
      amount = 0;
      currency = '';
      if (items.length > 0) {
        currency = items[0].value;
      }
      parts = value.split(' ');
      if (parts.length > 1) {
        amount = parseFloat(parts[0]);
        currency = parts[1];
      }
      group = $('<div>').addClass('input-group');
      btnGroup = $('<div>').addClass('input-group-btn').appendTo(group);
      $('<button>').attr('type', 'button').attr('data-toggle', 'dropdown').attr('aria-haspopup', 'true').attr('aria-expanded', 'false').addClass('btn btn-default dropdown-toggle').html('<span>GBP</span>&nbsp;<span class="caret"></span>').appendTo(btnGroup);
      ul = $('<ul>').addClass('dropdown-menu').appendTo(btnGroup);
      for (l = 0, len = items.length; l < len; l++) {
        item = items[l];
        $('<li>').html('<a href="javascript:void(0);">' + item.value + '</a>').appendTo(ul);
      }
      input = $('<input>').attr('type', 'text').attr('value', amount).on('click', function(e) {
        e.stopPropagation();
      }).on('change', function(e) {
        callback(input.autoNumeric('get') + ' ' + $('span', $('button', group)).first().text());
      }).on('keydown', function(e) {
        callback(input.autoNumeric('get') + ' ' + $('span', $('button', group)).first().text());
      }).appendTo(group);
      $('span', $('button', group)).first().text(currency);
      $('<span>').addClass('input-group-addon').text('.00').appendTo(group);
      input.autoNumeric('init', {
        aSep: ','
      });
      $('a', ul).on('click', function(e) {
        $('span', $('button', group)).first().text($(e.target).text());
        callback(input.autoNumeric('get') + ' ' + $(e.target).text());
      });
      return group;
    };

    buildColumnFilter = function(tableGrid, caption, name, dataType) {
      if (dataType === 'number') {
        return buildNumberFilter(tableGrid.Options, caption, name);
      } else if (dataType === 'date') {
        return buildDateFilter(tableGrid.Options, caption, name);
      } else if (dataType === 'bool') {
        return buildBoolFilter(tableGrid.Options, caption, name);
      } else if (dataType === 'set') {
        return buildSetFilter(tableGrid.Options, caption, name);
      } else {
        return buildTextFilter(tableGrid.Options, caption, name);
      }
    };

    bindColumnFilter = function(popover, tableGrid, name, dataType) {
      if (dataType === 'number') {
        bindNumberFilter(tableGrid, name);
      } else if (dataType === 'date') {
        bindDateFilter(tableGrid, name);
      } else if (dataType === 'bool') {
        bindBoolFilter(tableGrid, name);
      } else if (dataType === 'set') {
        bindSetFilter(popover, tableGrid, name);
      } else {
        bindTextFilter(tableGrid, name);
      }
    };

    buildTextFilter = function(options, caption, name) {
      var container, input;
      container = $('<div>');
      $('<span>').text('Filter: ').appendTo(container);
      input = $('<input>').attr('type', 'text').attr('id', name + 'Filter').attr('placeholder', 'Search ' + caption).appendTo(container);
      if (options.postData.Filter.hasOwnProperty(name)) {
        input.attr('value', options.postData.Filter[name]);
      }
      return container[0].outerHTML;
    };

    buildNumberFilter = function(options, caption, name) {
      var container;
      container = $('<div>');
      $('<span>').text('number filter not available').appendTo(container);
      return container[0].outerHTML;
    };

    buildDateFilter = function(options, caption, name) {
      var container;
      container = $('<div>');
      $('<span>').text('date filter not available').appendTo(container);
      return container[0].outerHTML;
    };

    buildBoolFilter = function(options, caption, name) {
      var container;
      container = $('<div>');
      if (options.postData.Filter.hasOwnProperty(name)) {
        if (options.postData.Filter[name] === true) {
          addCheckbox(container, 'Yes', 'SelectYes_' + name, true);
          addCheckbox(container, 'No', 'SelectNo_' + name, false);
        } else if (options.postData.Filter[name] === false) {
          addCheckbox(container, 'Yes', 'SelectYes_' + name, false);
          addCheckbox(container, 'No', 'SelectNo_' + name, true);
        } else {
          addCheckbox(container, 'Yes', 'SelectYes_' + name, true);
          addCheckbox(container, 'No', 'SelectNo_' + name, true);
        }
      } else {
        addCheckbox(container, 'Yes', 'SelectYes_' + name, true);
        addCheckbox(container, 'No', 'SelectNo_' + name, true);
      }
      return container[0].outerHTML;
    };

    buildSetFilter = function(options, caption, name) {
      var container, foundSet, item, itemContainer, l, len, len1, m, ref, ref1, set;
      container = $('<div>');
      addCheckbox(container, 'Select All', 'SelectAll_' + name, '', true);
      addDivider(container);
      ref = options.Sets;
      for (l = 0, len = ref.length; l < len; l++) {
        set = ref[l];
        if (set.Name === name) {
          foundSet = set;
          break;
        }
      }
      if (foundSet) {
        itemContainer = $('<div>').css('height', '200px').css('overflow-x', 'auto').appendTo(container);
        ref1 = foundSet.Items;
        for (m = 0, len1 = ref1.length; m < len1; m++) {
          item = ref1[m];
          addCheckbox(itemContainer, item.Text, name + '_' + item.Value, 'tablegrid-filter-checkbox', item.Selected);
        }
      }
      return container[0].outerHTML;
    };

    bindTextFilter = function(tableGrid, name) {
      $('#' + name + 'Filter').focus().on('keydown', function(e) {
        clearTimeout(tableGrid.searching);
        tableGrid.searching = setTimeout((function() {
          var value;
          value = $(e.target).val();
          if (tableGrid.Options.postData.Filter[name] !== value) {
            tableGrid.Options.postData.Filter[name] = value;
            tableGrid.update();
          }
        }), 300);
      });
    };

    bindNumberFilter = function(tableGrid, name) {};

    bindDateFilter = function(tableGrid, name) {};

    bindBoolFilter = function(tableGrid, name) {
      var triggerFilter;
      triggerFilter = function(tableGrid, name) {
        var selectNo, selectYes;
        selectYes = $('#SelectYes_' + name).is(':checked');
        selectNo = $('#SelectNo_' + name).is(':checked');
        if (selectYes && !selectNo) {
          tableGrid.Options.postData.Filter[name] = true;
        } else if (selectNo && !selectYes) {
          tableGrid.Options.postData.Filter[name] = false;
        } else {
          tableGrid.Options.postData.Filter[name] = null;
        }
        return tableGrid.update();
      };
      $('#SelectYes_' + name).on('change', function() {
        return triggerFilter(tableGrid, name);
      });
      $('#SelectNo_' + name).on('change', () => {
        return triggerFilter(tableGrid, name);
      });
    };

    bindSetFilter = function(popover, tableGrid, name) {
      var foundSet, l, len, ref, set;
      ref = tableGrid.Options.Sets;
      for (l = 0, len = ref.length; l < len; l++) {
        set = ref[l];
        if (set.Name === name) {
          foundSet = set;
          break;
        }
      }
      if (foundSet) {
        $('.tablegrid-filter-checkbox', popover).on('change', function(e) {
          var item, len1, m, ref1;
          ref1 = foundSet.Items;
          for (m = 0, len1 = ref1.length; m < len1; m++) {
            item = ref1[m];
            if (name + '_' + item.Value === $(e.target).attr('id')) {
              item.Selected = $(e.target).is(':checked');
              break;
            }
          }
          clearTimeout(tableGrid.searching);
          tableGrid.searching = setTimeout((function() {
            var len2, n, ref2, value;
            value = '';
            ref2 = foundSet.Items;
            for (n = 0, len2 = ref2.length; n < len2; n++) {
              item = ref2[n];
              if (item.Selected) {
                if (value.length > 0) {
                  value += ',';
                }
                value += item.Value;
              }
            }
            tableGrid.Options.postData.Filter[name] = value;
            return tableGrid.update();
          }), 300);
        });
      }
    };

    addCheckbox = function(container, caption, name, cssClass, checked) {
      var box, item;
      item = $('<div>').css('margin-right', '10px').css('white-space', 'nowrap').appendTo(container);
      box = $('<input>').attr('type', 'checkbox').attr('id', name).attr('name', name).attr('class', cssClass).appendTo(item);
      if (checked) {
        box.attr('checked', 'true');
      }
      $('<label>').attr('for', name).css('cursor', 'pointer').text(caption).appendTo(item);
    };

    addDivider = function(container) {
      var item;
      item = $('<div>').css('margin-bottom', '5px').css('border-bottom', '1px solid #ddd').appendTo(container);
    };

    return GridColumn;

  }).call(this);

  RojobaCo.GridColumnHeader = (function() {
    var add;

    class GridColumnHeader {
      constructor(TableGrid) {
        var column, l, len, options, ref;
        this.TableGrid = TableGrid;
        this.GridColumns = [];
        options = this.TableGrid.Options;
        //multiselect column
        if (options.multiselect) {
          this.GridColumns.push(new RojobaCo.GridColumn(this.TableGrid, {
            name: 'multiselect',
            caption: ''
          }));
        }
        if (options.columnModel && options.columnModel.length > 0) {
          ref = options.columnModel;
          for (l = 0, len = ref.length; l < len; l++) {
            column = ref[l];
            this.GridColumns.push(new RojobaCo.GridColumn(this.TableGrid, column));
          }
        }
        //action column
        if (options.rowActions.length > 0) {
          this.GridColumns.push(new RojobaCo.GridColumn(this.TableGrid, {
            name: 'action',
            caption: 'Actions'
          }));
        }
      }

      render(element) {
        var box, column, l, len, options, ref, thead, trow;
        options = this.TableGrid.Options;
        this.Element = $('<div>').addClass('tablegrid-header').appendTo(element);
        box = $('<div>').addClass('tablegrid-header-box').appendTo(this.Element);
        this.TableElement = $('<table>').addClass('table').appendTo(box);
        thead = $('<thead>').appendTo(this.TableElement);
        trow = $('<tr>').appendTo(thead);
        ref = this.GridColumns;
        for (l = 0, len = ref.length; l < len; l++) {
          column = ref[l];
          column.render(trow);
        }
      }

    };

    GridColumnHeader.Element = null;

    GridColumnHeader.TableElement = null;

    add = function(gridColumns, tableGrid, column) {
      var existingColumn, gridColumn, l, len;
      existingColumn = null;
      for (l = 0, len = gridColumns.length; l < len; l++) {
        gridColumn = gridColumns[l];
        if (gridColumn.Name === column.Name) {
          existingColumn = gridColumn;
          break;
        }
      }
      if (existingColumn) {
        existingColumn.Caption = column.Caption;
        existingColumn.Align = column.Align;
        existingColumn.DataType = column.DataType;
      } else {
        gridColumns.push(new RojobaCo.GridColumn(tableGrid, column));
      }
    };

    return GridColumnHeader;

  }).call(this);

  RojobaCo.GridEmptyRow = class GridEmptyRow {
    constructor(Grid, Options) {
      this.Grid = Grid;
      this.Options = Options;
      this.Id = 'tmp-id-' + $.now();
    }

    render(element) {
      var tr;
      tr = $('<tr>').attr('id', this.Id).addClass('tablegrid-emptyrow').appendTo(element);
      $('<td>').attr('colspan', this.Grid.ColumnHeader.GridColumns.length).text('There are no records to display').appendTo(tr);
    }

  };

  RojobaCo.GridFirstRow = class GridFirstRow {
    constructor(Grid, Options) {
      this.Grid = Grid;
      this.Options = Options;
      this.Id = 'tmp-id-' + $.now();
    }

    render(element) {
      var column, l, len, ref, td, tr;
      tr = $('<tr>').attr('id', this.Id).addClass('tablegrid-firstrow').css('height', 'auto').appendTo(element);
      ref = this.Grid.ColumnHeader.GridColumns;
      for (l = 0, len = ref.length; l < len; l++) {
        column = ref[l];
        td = $('<td>').css('height', '0px').css('padding', '0px').css('margin', '0px').appendTo(tr);
      }
    }

  };

  RojobaCo.GridFooter = class GridFooter {
    constructor(TableGrid) {
      this.TableGrid = TableGrid;
      this.Pager = null;
      this.LastPage = 1;
    }

    reset() {
      $('.tablegrid-footer-page', this.TableGrid.View).remove();
      this.LastPage = 1;
    }

    render(element) {
      var action, buttons, footer, l, len, more, moreMenuId, options, pageSize, pagerNav, ref, ul;
      options = this.TableGrid.Options;
      if (!options.footer) {
        return;
      }
      footer = $('<div>').addClass('tablegrid-footer clearfix').appendTo(element);
      if (options.hide) {
        footer.css('display', 'none');
      }
      buttons = $('<div>').addClass('tablegrid-footer-buttons float-left btn-group').attr('role', 'group').appendTo(footer);
      $('<a>').attr('href', 'javascript:void(0);').attr('title', 'Refresh all records').addClass('btn btn-default btn-secondary').html('<i class="fa fa-sync"></i>').on('click', (e) => {
        this.TableGrid.refresh();
        e.stopPropagation();
      }).appendTo(buttons);
      $('<a>').attr('href', 'javascript:void(0);').attr('title', 'Clear all filters').addClass('btn btn-default btn-secondary').html('<i class="fa fa-filter"></i>').on('click', (e) => {
        this.TableGrid.clearFilter();
        e.stopPropagation();
      }).appendTo(buttons);
      if (options.footerActions.length > 0) {
        moreMenuId = 'moreMenuLink_' + this.TableGrid.Element.attr('id');
        more = $('<a>').attr('id', moreMenuId).attr('href', 'javascript:void(0)').attr('data-toggle', 'dropdown').addClass('btn btn-secondary dropdown-toggle').text('More actions').appendTo(buttons);
        ul = $('<div>').addClass('dropdown-menu').attr('aria-labelledby', moreMenuId).appendTo(more);
        ref = options.footerActions;
        for (l = 0, len = ref.length; l < len; l++) {
          action = ref[l];
          $('<a>').attr('href', 'javascript:void(0)').attr('title', action.title).addClass('dropdown-item').html('<i class="fa fa-' + action.icon + '" style="margin-right: 5px;"></i>' + action.caption).on('click', action.onClick).appendTo(ul);
        }
      }
      pagerNav = $('<nav>').addClass('tablegrid-footer-pager float-right').appendTo(footer);
      pageSize = $('<div>').addClass('tablegrid-footer-pagesize float-left').appendTo(pagerNav);
      $('<select>').addClass('form-control').html('<option value="10">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option>').on('change', (e) => {
        this.TableGrid.reset();
        this.TableGrid.PageSize = parseInt($(e.currentTarget).val());
        this.TableGrid.refresh();
      }).appendTo(pageSize);
      this.Pager = $('<ul>').addClass('pagination').appendTo(pagerNav);
      $('<li>').addClass('page-item disabled tablegrid-footer-previous').html('<a class="page-link" href="javascript:void(0);">Previous</a>').on('click', (e) => {
        var prevPage;
        if (!$(e.currentTarget).hasClass('disabled')) {
          prevPage = $('li[data-page="' + (this.TableGrid.PageNo - 1) + '"]');
          prevPage.trigger('click');
        }
      }).appendTo(this.Pager);
      $('<li>').addClass('page-item tablegrid-footer-next').html('<a class="page-link" href="javascript:void(0);">Next</a>').on('click', (e) => {
        var nextPage;
        if (!$(e.currentTarget).hasClass('disabled')) {
          nextPage = $('li[data-page="' + (this.TableGrid.PageNo + 1) + '"]');
          nextPage.trigger('click');
        }
      }).appendTo(this.Pager);
      $('select', pageSize).val(options.initialPageSize);
    }

    update() {
      if (!this.TableGrid.Options.footer) {
        return;
      }
      if (this.LastPage === 1) {
        $('li.tablegrid-footer-page', this.Pager).remove();
        $('<li>').addClass('page-item active tablegrid-footer-page').attr('data-prevId', this.TableGrid.PrevId).attr('data-page', 1).attr('data-nextId', this.TableGrid.NextId).html('<a class="page-link" href="javascript:void(0);">1</a>').on('click', (e) => {
          $('li.tablegrid-footer-page', this.Pager).removeClass('active');
          $(e.currentTarget).addClass('active');
          this.TableGrid.PrevId = null;
          this.TableGrid.PageNo = parseInt($(e.currentTarget).attr('data-page'));
          this.TableGrid.NextId = null;
          this.TableGrid.refresh();
        }).insertBefore($('li.tablegrid-footer-next', this.Pager));
      }
      if (this.TableGrid.NextId && this.LastPage === this.TableGrid.PageNo) {
        this.LastPage = this.TableGrid.PageNo + 1;
        $('<li>').addClass('page-item tablegrid-footer-page').attr('data-prevId', this.TableGrid.PrevId).attr('data-page', this.LastPage).attr('data-nextId', this.TableGrid.NextId).html('<a class="page-link" href="javascript:void(0);">' + this.LastPage + '</a>').on('click', (e) => {
          $('li.tablegrid-footer-page', this.Pager).removeClass('active');
          $(e.currentTarget).addClass('active');
          this.TableGrid.PrevId = $(e.currentTarget).attr('data-prevId');
          this.TableGrid.PageNo = parseInt($(e.currentTarget).attr('data-page'));
          this.TableGrid.NextId = $(e.currentTarget).attr('data-nextId');
          this.TableGrid.refresh();
        }).insertBefore($('li.tablegrid-footer-next', this.Pager));
      }
      if (this.TableGrid.PageNo === 1) {
        $('li.tablegrid-footer-previous', this.Pager).addClass('disabled');
      } else {
        $('li.tablegrid-footer-previous', this.Pager).removeClass('disabled');
      }
      if (this.TableGrid.NextId) {
        $('li.tablegrid-footer-next', this.Pager).removeClass('disabled');
      } else {
        $('li.tablegrid-footer-next', this.Pager).addClass('disabled');
      }
    }

  };

  RojobaCo.GridFrozenColumn = (function() {
    class GridFrozenColumn {
      constructor(TableGrid, Column) {
        var detailbox, header, headerbox, headertable, options, thead, trow;
        this.TableGrid = TableGrid;
        this.Column = Column;
        options = this.TableGrid.Options;
        this.Container = $('<div>').addClass('tablegrid-frozen').appendTo(this.TableGrid.View);
        if (options.hide) {
          this.Container.css('display', 'none');
        }
        header = $('<div>').addClass('tablegrid-frozen-header').appendTo(this.Container);
        headerbox = $('<div>').addClass('tablegrid-frozen-header-box').appendTo(header);
        headertable = $('<table>').addClass('table').appendTo(headerbox);
        thead = $('<thead>').appendTo(headertable);
        trow = $('<tr>').appendTo(thead);
        this.Column.render(trow);
        this.Detail = $('<div>').addClass('tablegrid-frozen-detail').appendTo(this.Container);
        detailbox = $('<div>').addClass('tablegrid-frozen-detail-box').appendTo(this.Detail);
        this.TableElement = $('<table>').addClass('table').appendTo(detailbox);
        return;
      }

      render(rows) {
        var l, len, row;
        $('tr.tablegrid-frozen-row', this.TableElement).remove();
        $('tr.tablegrid-frozen-grouprow', this.TableElement).remove();
        $('tr.tablegrid-frozen-parentrow', this.TableElement).remove();
        for (l = 0, len = rows.length; l < len; l++) {
          row = rows[l];
          this.addRow(row);
        }
      }

      addRow(row) {
        var cell, elTr, hidden, l, len, options, ref;
        options = this.TableGrid.Options;
        elTr = row.render();
        this.TableElement.append(elTr);
        elTr.attr('id', 'F_' + this.Column.Name + '_' + row.Id);
        hidden = false;
        if (options.rowDisabled && options.rowDisabled(row.Data)) {
          hidden = true;
        }
        if (row instanceof RojobaCo.GridGroupRow) {
          hidden = true;
          elTr.addClass('tablegrid-frozen-grouprow');
        } else if (row instanceof RojobaCo.GridParentRow) {
          hidden = true;
          elTr.empty();
          // .html '&nbsp;'
          $('<td>').html(row.Data.Status).appendTo(elTr);
          elTr.addClass('tablegrid-frozen-parentrow');
        } else {
          ref = row.GridCells;
          for (l = 0, len = ref.length; l < len; l++) {
            cell = ref[l];
            if (cell.GridColumn.Name === this.Column.Name) {
              cell.render(elTr);
            }
          }
          elTr.removeClass('tablegrid-row');
          elTr.addClass('tablegrid-frozen-row');
        }
      }

      updateRow(row) {
        var action, actionClick, afterTr, button, buttons, disabled, hidden, l, len, options, ref, rowId, td, tr;
        options = this.TableGrid.Options;
        rowId = row[options.idColumn];
        afterTr = $('tr#A_' + rowId, this.TableElement).prev();
        $('tr#A_' + rowId, this.TableElement).remove();
        tr = $('<tr>').attr('id', 'A_' + rowId).addClass('tablegrid-action-row');
        if (afterTr.length === 0) {
          tr.prependTo(this.TableElement);
        } else {
          tr.insertAfter(afterTr);
        }
        td = $('<td>').appendTo(tr);
        hidden = false;
        if (options.rowDisabled && options.rowDisabled(row)) {
          hidden = true;
        }
        actionClick = (e) => {
          var action, iconClass, id, l, len, ref;
          id = $(e.target).closest('tr').attr('id');
          options = this.TableGrid.Options;
          iconClass = '';
          if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON') {
            iconClass = $('i', $(e.target)).attr('class');
          } else {
            iconClass = $(e.target).attr('class');
          }
          ref = options.rowActions;
          for (l = 0, len = ref.length; l < len; l++) {
            action = ref[l];
            if (iconClass.indexOf(action.icon) !== -1) {
              rowId = id.substring(2, id.length);
              action.onClick(rowId);
              if (options.afterRowAction) {
                options.afterRowAction(rowId, action.name);
              }
              break;
            }
          }
          e.stopPropagation();
        };
        if (options.rowActions.length > 0 && hidden !== true) {
          buttons = $('<div>').addClass('tablegrid-action-buttons btn-group').attr('role', 'group').css('float', 'left').appendTo(td);
          ref = options.rowActions;
          for (l = 0, len = ref.length; l < len; l++) {
            action = ref[l];
            hidden = false;
            if (action.hidden) {
              hidden = action.hidden(row);
            }
            disabled = false;
            if (action.disabled) {
              disabled = action.disabled(row);
            }
            if (hidden !== true) {
              button = $('<a>').attr('href', 'javascript:void(0);').attr('title', action.title).appendTo(buttons);
              if (action.caption && action.caption.length > 0) {
                button.html('<i class="fa fa-' + action.icon + '"></i>&nbsp;' + action.caption);
              } else {
                button.addClass('btn btn-default btn-secondary').html('<i class="fa fa-' + action.icon + '"></i>');
              }
              if (action.cssClass && action.cssClass.length > 0) {
                button.addClass(action.cssClass);
              }
              if (disabled === true) {
                button.addClass('disabled');
              } else {
                button.on('click', actionClick);
              }
            }
          }
        } else {
          td.html('&nbsp;');
        }
      }

    };

    GridFrozenColumn.TableElement = null;

    GridFrozenColumn.Container = null;

    return GridFrozenColumn;

  }).call(this);

  RojobaCo.GridGroupRow = class GridGroupRow {
    constructor(Grid, Data, Options) {
      this.Grid = Grid;
      this.Data = Data;
      this.Options = Options;
      this.Id = 'tmp-id-' + $.now();
    }

    render() {
      var tr;
      tr = $('<tr>').attr('id', this.Id).addClass('tablegrid-grouprow');
      $('<td>').attr('colspan', this.Grid.ColumnHeader.GridColumns.length).text(this.Data).appendTo(tr);
      return tr;
    }

  };

  RojobaCo.GridHeader = class GridHeader {
    constructor(TableGrid) {
      this.TableGrid = TableGrid;
      return;
    }

  };

  RojobaCo.GridMultiSelectColumn = (function() {
    class GridMultiSelectColumn {
      constructor(TableGrid) {
        var detail, detailbox, header, headerbox, headertable, options, th, thead, trow;
        this.select = this.select.bind(this);
        this.TableGrid = TableGrid;
        options = this.TableGrid.Options;
        this.Container = $('<div>').addClass('tablegrid-multiselect').appendTo(this.TableGrid.View);
        if (options.hide) {
          this.Container.css('display', 'none');
        }
        header = $('<div>').addClass('tablegrid-multiselect-header').appendTo(this.Container);
        headerbox = $('<div>').addClass('tablegrid-multiselect-header-box').appendTo(header);
        headertable = $('<table>').addClass('table').appendTo(headerbox);
        thead = $('<thead>').appendTo(headertable);
        trow = $('<tr>').appendTo(thead);
        th = $('<th>').addClass('tablegrid-column').css('width', '1px').appendTo(trow);
        $('<input>').attr('type', 'checkbox').addClass('tablegrid-checkbox_all').css('margin', '0').on('change', (e) => {
          var i, isChecked, l, len, ref, row;
          ref = this.TableGrid.Grid.Rows;
          for (i = l = 0, len = ref.length; l < len; i = ++l) {
            row = ref[i];
            isChecked = $(e.currentTarget).is(':checked');
            if ($('#tablegrid-checkbox_' + row.Id).length > 0) {
              row.Selected = isChecked;
              $('#tablegrid-checkbox_' + row.Id).prop('checked', isChecked);
            }
          }
        }).appendTo(th);
        detail = $('<div>').addClass('tablegrid-multiselect-detail').appendTo(this.Container);
        detailbox = $('<div>').addClass('tablegrid-multiselect-detail-box').appendTo(detail);
        this.TableElement = $('<table>').addClass('table').appendTo(detailbox);
        return;
      }

      render(rows) {
        var hidden, l, len, options, parentClass, row, td, tr;
        $('tr.tablegrid-multiselect-row', this.TableElement).remove();
        $('tr.tablegrid-multiselect-grouprow', this.TableElement).remove();
        $('tr.tablegrid-multiselect-parentrow', this.TableElement).remove();
        options = this.TableGrid.Options;
        for (l = 0, len = rows.length; l < len; l++) {
          row = rows[l];
          tr = $('<tr>').attr('id', 'C_' + row.Id).appendTo(this.TableElement);
          td = $('<td>').appendTo(tr);
          hidden = false;
          if (row instanceof RojobaCo.GridRow) {
            if (options.multiselect.hidden && options.multiselect.hidden(row.Data)) {
              hidden = true;
            }
          }
          if (options.rowDisabled && options.rowDisabled(row.Data)) {
            hidden = true;
          }
          if (row instanceof RojobaCo.GridGroupRow) {
            hidden = true;
            tr.addClass('tablegrid-multiselect-grouprow');
          } else if (row instanceof RojobaCo.GridParentRow) {
            if (options.showChildrenMultiSelect) {
              tr.addClass('tablegrid-multiselect-parentrow hidden');
            } else {
              tr.addClass('tablegrid-multiselect-parentrow');
            }
          } else {
            parentClass = '';
            if (options.parentColumn) {
              parentClass = ' ' + row.Data[options.parentColumn];
            }
            tr.addClass('tablegrid-multiselect-row' + parentClass);
            if (options.parentColumn && !options.showChildrenMultiSelect) {
              tr.hide();
            }
          }
          if (hidden) {
            td.html('&nbsp;');
          } else {
            $('<input>').attr('type', 'checkbox').attr('id', 'tablegrid-checkbox_' + row.Id).attr('value', row.Id).css('margin', '0').on('change', this.select).appendTo(td);
          }
        }
      }

      addRow(row) {
        var hidden, options, rowId, td, tr;
        options = this.TableGrid.Options;
        rowId = row[options.idColumn];
        tr = $('<tr>').attr('id', 'C_' + rowId).addClass('tablegrid-multiselect-row').appendTo(this.TableElement);
        td = $('<td>').appendTo(tr);
        hidden = false;
        if (options.multiselect.hidden) {
          hidden = options.multiselect.hidden(row);
        }
        if (options.rowDisabled && options.rowDisabled(row)) {
          hidden = true;
        }
        if (hidden) {
          td.html('&nbsp;');
        } else {
          $('<input>').attr('type', 'checkbox').attr('id', 'tablegrid-checkbox_' + rowId).attr('value', rowId).css('margin', '0').on('change', this.select).appendTo(td);
        }
      }

      updateRow(row) {
        var afterTr, hidden, options, rowId, td, tr;
        options = this.TableGrid.Options;
        rowId = row[options.idColumn];
        afterTr = $('tr#C_' + rowId, this.TableElement).prev();
        $('tr#C_' + rowId, this.TableElement).remove();
        tr = $('<tr>').attr('id', 'C_' + rowId).addClass('tablegrid-multiselect-row');
        if (afterTr.length === 0) {
          tr.prependTo(this.TableElement);
        } else {
          tr.insertAfter(afterTr);
        }
        td = $('<td>').appendTo(tr);
        hidden = false;
        if (options.multiselect.hidden) {
          hidden = options.multiselect.hidden(row);
        }
        if (options.rowDisabled && options.rowDisabled(row)) {
          hidden = true;
        }
        if (hidden !== true) {
          $('<input>').attr('type', 'checkbox').attr('id', 'tablegrid-checkbox_' + rowId).attr('value', rowId).css('margin', '0').on('change', this.select).appendTo(td);
        }
      }

      select(e) {
        var allChecked, l, len, options, parentValue, ref, row, selectedId;
        options = this.TableGrid.Options;
        selectedId = $(e.target).val();
        allChecked = true;
        ref = this.TableGrid.Grid.Rows;
        for (l = 0, len = ref.length; l < len; l++) {
          row = ref[l];
          if (row.Id.toString() === selectedId) {
            row.Selected = $(e.target).is(':checked');
            if (row instanceof RojobaCo.GridParentRow) {
              parentValue = row.Data[options.parentColumn];
              $('.' + parentValue, this.TableElement).each((index, element) => {
                var childRow, len1, m, ref1, rowId;
                rowId = $(element).attr('id').substring(2);
                $('#tablegrid-checkbox_' + rowId).prop('checked', row.Selected);
                ref1 = this.TableGrid.Grid.Rows;
                for (m = 0, len1 = ref1.length; m < len1; m++) {
                  childRow = ref1[m];
                  if (childRow.Id.toString() === rowId) {
                    childRow.Selected = row.Selected;
                    break;
                  }
                }
              });
            }
          }
          if (!row instanceof RojobaCo.GridParentRow) {
            row.Element.removeClass('tablegrid-row-selected');
            if (row.Selected) {
              row.Element.addClass('tablegrid-row-selected');
            } else {
              allChecked = false;
            }
          }
        }
        $('#tablegrid-checkbox_all').prop('checked', allChecked);
      }

    };

    GridMultiSelectColumn.TableElement = null;

    GridMultiSelectColumn.Container = null;

    return GridMultiSelectColumn;

  }).call(this);

  RojobaCo.GridNewRow = class GridNewRow {
    constructor(Grid, Options) {
      var blankRow, column, l, len, len1, m, ref, ref1;
      this.Grid = Grid;
      this.Options = Options;
      this.Id = 'tmp-id-' + $.now();
      blankRow = {};
      ref = this.Grid.ColumnHeader.GridColumns;
      for (l = 0, len = ref.length; l < len; l++) {
        column = ref[l];
        switch (column.DataType) {
          case 'int':
          case 'currency':
            blankRow[column.Name] = '0';
            break;
          default:
            blankRow[column.Name] = '';
        }
      }
      this.GridCells = [];
      ref1 = this.Grid.ColumnHeader.GridColumns;
      for (m = 0, len1 = ref1.length; m < len1; m++) {
        column = ref1[m];
        this.GridCells.push(new RojobaCo.GridCell(column, blankRow));
      }
    }

    render(element) {
      var gridCell, l, len, ref, tr;
      tr = $('<tr>').attr('id', this.Id).addClass('tablegrid-newrow').appendTo(element);
      ref = this.GridCells;
      for (l = 0, len = ref.length; l < len; l++) {
        gridCell = ref[l];
        gridCell.render(tr);
      }
    }

  };

  RojobaCo.GridParentRow = class GridParentRow {
    constructor(Grid, Data, Options) {
      this.Grid = Grid;
      this.Data = Data;
      this.Options = Options;
      this.Id = 'tmp-id-' + this.Data[this.Options.parentColumn];
      this.HasStock = this.Data.HasStock;
      this.IsLocked = this.Data.IsLocked;
      this.ForcedParentValues = this.Data.ForcedParentValues;
      return;
    }

    render() {
      var Difference, DifferencePercentage, bcInventory, column, currentRowDuration, currentRowDurationParts, hours, i, isNumber, l, len, len1, m, minutes, now, parentColumnIndex, parentValue, ref, ref1, row, seconds, td, timeParts, totalValue, tr, value;
      parentValue = this.Data[this.Options.parentColumn].replace(' ', '');
      if (this.Options.hideParent) {
        tr = $('<tr>').attr('id', this.Id).addClass('tablegrid-parentrow text-nowrap hidden');
      } else {
        if (this.HasStock) {
          tr = $('<tr>').attr('id', this.Id).addClass('tablegrid-parentrow text-nowrap');
        } else {
          tr = $('<tr>').attr('id', this.Id).addClass('tablegrid-parentrow text-nowrap no-stock');
        }
      }
      parentColumnIndex = 0;
      if (this.Grid.MultiSelectColumn) {
        parentColumnIndex = 1;
        $('<td>').appendTo(tr);
      }
      td = $('<td>').html(function() {
        if (parentValue.includes('Colour-Change')) {
          return '<span>Colour Change</span>';
        } else if (parentValue.includes('Break')) {
          return '<span>Break</span>';
        } else {
          return '<span>' + parentValue + '</span>';
        }
      }).appendTo(tr);
      //  td = $('<td>')
      //     .html '<span>' + parentValue + '</span>'
      //     .appendTo tr
      if (this.Options.expandParentColumns) {
        $('<i>').addClass('tablegrid-parentrow-toggle').prependTo(td);
      } else if (!this.Options.hideChildren) {
        $('<i>').addClass('tablegrid-parentrow-toggle la la-caret-right').attr('data-job', this.Id).on('click', (e) => {
          var job;
          job = $(e.target).data('job');
          $('[data-job=' + job + ']').toggleClass('la-caret-down');
          $('[data-job=' + job + ']').toggleClass('la-caret-right');
          $('.' + parentValue, this.Grid.View).toggle();
        }).prependTo(td);
      }
      if (this.IsLocked) {
        tr.addClass('row-locked');
        $('<i>').addClass('la la-lock').prependTo(td);
      }
      ref = this.Grid.ColumnHeader.GridColumns;
      for (i = l = 0, len = ref.length; l < len; i = ++l) {
        column = ref[i];
        if (i > parentColumnIndex) {
          totalValue = '';
          isNumber = false;
          if (column.DataType === 'int' || column.DataType === 'float') {
            totalValue = 0;
          }
          now = moment();
          if (column.DataType === 'Duration') {
            now.set({
              hour: 0,
              minute: 0,
              second: 0
            });
            totalValue = '00:00:00';
          }
          ref1 = this.Grid.Rows;
          for (m = 0, len1 = ref1.length; m < len1; m++) {
            row = ref1[m];
            if (row instanceof RojobaCo.GridRow) {
              if (row.Data[this.Options.parentColumn] === parentValue) {
                if (column.Render) {
                  if (column.Name === 'ExtToBeCoated') {
                    value = row.Data[column.Name];
                  } else {
                    value = column.Render(this.Data);
                  }
                } else {
                  value = row.Data[column.Name];
                }
                if (column.Name === 'Status') {
                  if (value === 'QC Passed') {
                    tr.addClass('jobparent-qcpassed');
                  } else if (value === 'QA') {
                    tr.addClass('jobparent-qa');
                  } else if (value === 'Completed') {
                    tr.addClass('jobparent-completed');
                  } else if (value === 'Awaiting Dispatch') {
                    tr.addClass('jobparent-awaitingdispatch');
                  } else if (value === 'Scheduled') {
                    tr.addClass('jobparent-scheduled');
                  } else if (value === 'Colour Change') {
                    tr.addClass('jobparent-colourchange');
                  } else if (value === 'Break') {
                    tr.addClass('jobparent-break');
                  }
                }
                if (value) {
                  if (column.DataType === 'int') {
                    isNumber = true;
                    totalValue += parseInt(value);
                  } else if (column.DataType === 'float') {
                    isNumber = true;
                    totalValue += parseFloat(value);
                  } else if (column.DataType === 'StartTime') {
                    if (totalValue === '') {
                      totalValue = value;
                    }
                  } else if (column.DataType === 'PowderUsage') {
                    if (!totalValue) {
                      totalValue = value;
                    }
                  } else if (column.DataType === 'Duration') {
                    if (row.Data.DurationOfJob !== 0) {
                      hours = parseInt(row.Data.DurationOfJob * 24);
                      minutes = parseInt(((row.Data.DurationOfJob * 24) - hours) * 60);
                      seconds = parseInt((((row.Data.DurationOfJob * 24) * 60) - minutes) * 60);
                      currentRowDuration = ('00' + hours).slice(-2) + ':' + ('00' + minutes).slice(-2) + ':' + ('00' + seconds).slice(-2);
                      timeParts = now.format('HH:mm:ss').split(':');
                      currentRowDurationParts = currentRowDuration.split(':');
                      now.set({
                        hour: parseInt(timeParts[0]) + parseInt(currentRowDurationParts[0]),
                        minute: parseInt(timeParts[1]) + parseInt(currentRowDurationParts[1]),
                        second: parseInt(timeParts[2]) + parseInt(currentRowDurationParts[2])
                      });
                      totalValue = now.format('HH:mm:ss');
                    }
                  } else {
                    if (totalValue.indexOf(value) === -1) {
                      if (totalValue.length > 0) {
                        totalValue += ', ';
                      }
                      totalValue += value;
                    }
                  }
                }
              }
            }
          }
          if (isNumber && column.Name !== 'ExtToBeCoated') {
            $('<td>').html(totalValue.toFixed(2)).appendTo(tr);
          } else if (column.Name === 'QuantityOnPurchaseOrder' || column.Name === 'QuantityOnSalesOrder' || column.Name === 'QuantityOnComponentLines') {
            if (totalValue.length === 0) {
              $('<td>').html(0).css('text-align', 'center').appendTo(tr);
            } else {
              $('<td>').html(totalValue).css('text-align', 'center').appendTo(tr);
            }
          } else if (column.Name === 'BCInventory') {
            bcInventory = this.ForcedParentValues.BCInventory;
            $('<td>').html(bcInventory).appendTo(tr);
          } else if (column.Name === 'Difference') {
            Difference = this.ForcedParentValues.Difference;
            $('<td>').html(Difference).appendTo(tr);
          } else if (column.Name === 'DifferencePercentage') {
            DifferencePercentage = this.ForcedParentValues.DifferencePercentage;
            $('<td>').html(DifferencePercentage).appendTo(tr);
          } else {
            $('<td>').html(totalValue).appendTo(tr);
          }
        }
      }
      if (this.Grid.ActionColumn) {
        $('<td>').appendTo(tr);
      }
      return tr;
    }

  };

  RojobaCo.GridReviewColumn = class GridReviewColumn {
    constructor(TableGrid) {
      this.TableGrid = TableGrid;
    }

    render(data) {
      var div, l, len, options, ref, row, th, thead, tr;
      options = this.TableGrid.Options;
      div = $('<div>').addClass('tablegrid-review').css('position', 'absolute').css('right', '0').css('top', '0').appendTo(this.TableGrid.View);
      if (options.hide) {
        div.css('display', 'none');
      }
      this.Table = $('<table>').addClass('table table-bordered table-striped table-hover').css('margin', '0').appendTo(div);
      this.Table.addClass(this.TableGrid.Element.attr('class'));
      thead = $('<thead>').appendTo(this.Table);
      tr = $('<tr>').addClass('tablegrid-review-header').appendTo(thead);
      th = $('<th>').text('Review').appendTo(tr);
      ref = data.rows;
      for (l = 0, len = ref.length; l < len; l++) {
        row = ref[l];
        this.addRow(row);
      }
    }

    addRow(row) {
      var buttons, options, rowId, td, tr;
      options = this.TableGrid.Options;
      rowId = row[options.idColumn];
      tr = $('<tr>').attr('id', 'R_' + rowId).addClass('tablegrid-review-row').appendTo(this.Table);
      td = $('<td>').appendTo(tr);
      buttons = $('<div>').addClass('tablegrid-review-buttons btn-group').attr('role', 'group').css('float', 'left').appendTo(td);
      $('<button>').attr('type', 'button').attr('title', 'Review this record').addClass('btn btn-default').html('<i class="fa fa-eye"></i>').on('click', function(e) {
        var id;
        id = $(e.target).closest('tr').attr('id');
        options.onReviewClick(id.substring(2, id.length));
      }).appendTo(buttons);
    }

    updateRow(row) {
      var action, actionClick, afterTr, buttons, hidden, l, len, options, ref, rowId, td, tr;
      options = this.TableGrid.Options;
      rowId = row[options.idColumn];
      afterTr = $('tr#A_' + rowId, this.Table).prev();
      $('tr#A_' + rowId, this.Table).remove();
      tr = $('<tr>').attr('id', 'A_' + rowId).addClass('tablegrid-action-row');
      if (afterTr.length === 0) {
        tr.prependTo($('tbody', this.Table));
      } else {
        tr.insertAfter(afterTr);
      }
      td = $('<td>').appendTo(tr);
      actionClick = (e) => {
        var action, iconClass, id, l, len, ref;
        id = $(e.target).closest('tr').attr('id');
        iconClass = '';
        if (e.target.tagName === 'BUTTON') {
          iconClass = $('i', $(e.target)).attr('class');
        } else {
          iconClass = $(e.target).attr('class');
        }
        ref = options.rowActions;
        for (l = 0, len = ref.length; l < len; l++) {
          action = ref[l];
          if (iconClass.indexOf(action.icon) !== -1) {
            action.onClick(id.substring(2, id.length));
            break;
          }
        }
        e.stopPropagation();
      };
      if (options.rowActions.length > 0) {
        buttons = $('<div>').addClass('tablegrid-action-buttons btn-group').attr('role', 'group').css('float', 'left').appendTo(td);
        ref = options.rowActions;
        for (l = 0, len = ref.length; l < len; l++) {
          action = ref[l];
          hidden = false;
          if (action.hidden) {
            hidden = action.hidden(row);
          }
          if (hidden !== true) {
            $('<button>').attr('type', 'button').attr('title', action.title).addClass('btn btn-default').html('<i class="fa fa-' + action.icon + '"></i>').on('click', actionClick).appendTo(buttons);
          }
        }
      } else {
        td.html('&nbsp;');
      }
    }

  };

  RojobaCo.GridRow = class GridRow {
    constructor(Grid, Data, Options) {
      var column, l, len, ref;
      this.Grid = Grid;
      this.Data = Data;
      this.Options = Options;
      this.Id = this.Data[this.Options.idColumn];
      this.Selected = false;
      this.GridCells = [];
      this.ColourRow = this.Data.ColourRow;
      ref = this.Grid.ColumnHeader.GridColumns;
      for (l = 0, len = ref.length; l < len; l++) {
        column = ref[l];
        this.GridCells.push(new RojobaCo.GridCell(column, this));
      }
    }

    render() {
      var attr, key, parentClass, value;
      parentClass = '';
      if (this.Options.parentColumn && this.Data[this.Options.parentColumn]) {
        parentClass = ' ' + this.Data[this.Options.parentColumn];
      }
      if (this.ColourRow) {
        this.Element = $('<tr>').attr('id', this.Id).addClass('tablegrid-row text-nowrap' + parentClass + ' colour-row');
      } else {
        this.Element = $('<tr>').attr('id', this.Id).addClass('tablegrid-row text-nowrap' + parentClass);
      }
      if (this.Options.rowAttr) {
        attr = this.Options.rowAttr(this.Data);
        for (key in attr) {
          if (!hasProp.call(attr, key)) continue;
          value = attr[key];
          if (key === 'class') {
            this.Element.addClass(value);
          } else {
            this.Element.attr(key, value);
          }
        }
      }
      if (this.Options.rowDisabled && this.Options.rowDisabled(this.Data)) {
        this.Element.addClass('tablegrid-disable-row');
      }
      if (this.Options.parentColumn && !this.Options.expandParentColumns) {
        this.Element.hide();
      }
      return this.Element;
    }

  };

  RojobaCo.Pivot = (function() {
    var KEY_CODES;

    class Pivot {
      constructor(TableGrid) {
        var options;
        this.TableGrid = TableGrid;
        options = this.TableGrid.Options;
        this.ColumnHeader = new RojobaCo.PivotColumnHeader(this.TableGrid);
        this.Rows = [];
        if (options.edit) {
          $(document).on('click', (e) => {
            if ($(e.target).is('a') && $(e.target).parents('ul.dropdown-menu').length > 0) {
              return;
            }
            if (this.TableGrid.Edited) {
              if (options.onEdit) {
                options.onEdit();
              }
              this.TableGrid.Edited = false;
            }
            this.clearEditing();
          }).on('keydown', (e) => {
            if (this.CellSelected) {
              if (e.shiftKey) {
                switch (e.keyCode) {
                  case KEY_CODES.TAB:
                    e.preventDefault();
                    this.moveLeft();
                    break;
                  default:
                    return;
                }
              } else {
                switch (e.keyCode) {
                  case KEY_CODES.ARROW_LEFT:
                    e.preventDefault();
                    this.moveLeft();
                    break;
                  case KEY_CODES.ARROW_UP:
                    e.preventDefault();
                    this.moveUp();
                    break;
                  case KEY_CODES.ARROW_RIGHT:
                  case KEY_CODES.TAB:
                    e.preventDefault();
                    this.moveRight();
                    break;
                  case KEY_CODES.ARROW_DOWN:
                    e.preventDefault();
                    this.moveDown();
                    break;
                  case KEY_CODES.F2:
                    e.preventDefault();
                    this.editCell(this.CellSelected);
                    break;
                  default:
                    return;
                }
              }
            } else if (this.CellEdited) {
              if (e.shiftKey) {
                switch (e.keyCode) {
                  case KEY_CODES.TAB:
                    e.preventDefault();
                    this.moveLeft();
                    break;
                  default:
                    return;
                }
              } else {
                switch (e.keyCode) {
                  case KEY_CODES.ENTER:
                    e.preventDefault();
                    this.selectCell(this.CellEdited);
                    break;
                  case KEY_CODES.TAB:
                    e.preventDefault();
                    this.moveRight();
                    break;
                  default:
                    return;
                }
              }
            }
          });
        }
        return;
      }

      destroy() {
        var column, l, len, ref;
        ref = this.ColumnHeader.GridColumns;
        for (l = 0, len = ref.length; l < len; l++) {
          column = ref[l];
          column.destroy();
        }
      }

      render(data) {
        var agg, elTr, firstRow, gridCell, key, l, len, len1, len2, len3, len4, len5, len6, m, n, o, options, pivotData, q, r, ref, ref1, ref2, ref3, ref4, ref5, ref6, row, s, x, y;
        options = this.TableGrid.Options;
        if (this.Detail) {
          this.Detail.remove();
        }
        this.ColumnHeader.render(data);
        pivotData = {};
        ref = data.rows;
        for (l = 0, len = ref.length; l < len; l++) {
          row = ref[l];
          key = '';
          ref1 = options.xDimension;
          for (m = 0, len1 = ref1.length; m < len1; m++) {
            x = ref1[m];
            key += row[x];
          }
          if (!pivotData[key]) {
            pivotData[key] = {};
          }
          pivotData[key][options.idColumn] = key;
          ref2 = options.xDimension;
          for (n = 0, len2 = ref2.length; n < len2; n++) {
            x = ref2[n];
            pivotData[key][x] = row[x];
          }
          ref3 = options.yDimension;
          for (o = 0, len3 = ref3.length; o < len3; o++) {
            y = ref3[o];
            ref4 = options.aggregates;
            for (q = 0, len4 = ref4.length; q < len4; q++) {
              agg = ref4[q];
              pivotData[key][row[y] + '_' + agg.member] = row[agg.member];
            }
          }
        }
        this.Rows = [];
        for (key in pivotData) {
          row = pivotData[key];
          this.Rows.push(new RojobaCo.GridRow(this, row, this.TableGrid.Options));
        }
        this.Detail = $('<div>').addClass('tablegrid-detail').scroll((e) => {
          var divSelect, el;
          if (this.CellSelected) {
            el = this.CellSelected.Element[0];
            divSelect = $('div.tablegrid-cell-select');
            if (divSelect.length > 0) {
              divSelect.css('left', el.offsetLeft);
            }
          }
          $('.tablegrid-header', this.TableGrid.View).scrollLeft($(e.target).scrollLeft());
        }).appendTo(this.TableGrid.View);
        this.Box = $('<div>').addClass('tablegrid-detail-box').appendTo(this.Detail);
        if (options.height) {
          this.Detail.css('height', options.height + 'px');
        }
        if (options.hide) {
          this.Detail.css('display', 'none');
        }
        this.TableElement = $('<table>').addClass('table table-hover').appendTo(this.Box);
        this.TableElement.addClass(this.TableGrid.Element.attr('class'));
        if (this.Rows.length > 0) {
          firstRow = new RojobaCo.GridFirstRow(this, options);
          firstRow.render(this.TableElement);
        }
        ref5 = this.Rows;
        for (r = 0, len5 = ref5.length; r < len5; r++) {
          row = ref5[r];
          elTr = row.render();
          this.TableElement.append(elTr);
          ref6 = row.GridCells;
          for (s = 0, len6 = ref6.length; s < len6; s++) {
            gridCell = ref6[s];
            gridCell.render(elTr);
          }
        }
        this.adjustSize();
      }

      onCellSelect(cell) {
        this.selectCell(cell);
      }

      onCellEdit(cell) {
        this.editCell(cell);
      }

      clearEditing() {
        var options;
        options = this.TableGrid.Options;
        $('div.tablegrid-cell-select').remove();
        $('div.tablegrid-cell-edit').remove();
        if (this.CellEdited) {
          if (this.CellEdited.HasValueChanged) {
            if (options.afterCellEdit) {
              options.afterCellEdit(this.CellEdited.GridRow.Id, this.CellEdited.Element, this.CellEdited.GridColumn.Name, this.CellEdited.Value, this.CellEdited.RowIndex, this.CellEdited.ColumnIndex);
            }
          }
          this.CellEdited.HasValueChanged = false;
        }
        this.CellSelected = null;
        this.CellEdited = null;
      }

      selectCell(cell) {
        var actionsWidth, el, lastColumn, options, scrollValue, self;
        self = this;
        self.clearEditing();
        this.CellSelected = cell;
        el = cell.Element[0];
        actionsWidth = 0;
        options = this.TableGrid.Options;
        if (options.rowActions.length > 0) {
          lastColumn = $('td', cell.Element.parent()).last();
          actionsWidth = lastColumn[0].offsetWidth;
        }
        scrollValue = (this.Detail[0].offsetWidth - actionsWidth) - (el.offsetLeft + el.offsetWidth);
        if (scrollValue < 0) {
          this.Detail[0].scrollLeft = Math.abs(scrollValue) + actionsWidth + this.Detail[0].scrollLeft;
        } else if (this.Detail[0].scrollLeft > 0) {
          this.Detail[0].scrollLeft = el.offsetLeft;
        }
        $('<div>').addClass('tablegrid-cell-select').css('top', el.offsetTop).css('left', el.offsetLeft).css('width', el.offsetWidth).css('height', el.offsetHeight).on('click', function(e) {
          self.editCell(cell);
          e.stopPropagation();
        }).on('dblclick', function(e) {
          self.editCell(cell);
          e.stopPropagation();
        }).appendTo(this.Detail);
        if (options.editOnSelect) {
          self.editCell(cell);
        }
      }

      editCell(cell) {
        var el, input, inputContainer, options;
        options = this.TableGrid.Options;
        if (!cell.GridColumn.Readonly) {
          this.clearEditing();
          this.CellEdited = cell;
          el = cell.Element[0];
          inputContainer = $('<div>').addClass('tablegrid-cell-edit').css('top', el.offsetTop).css('left', el.offsetLeft).css('width', el.offsetWidth).css('height', el.offsetHeight).appendTo(this.Detail);
          input = cell.GridColumn.getInput(cell.Value, (value) => {
            var canEdit, cellValue, column, index, key, l, len, len1, len2, len3, m, n, nameParts, o, readOnlyCell, ref, ref1, ref2, ref3, row, valueSet, x, y;
            canEdit = !options.beforeCellEdit;
            if (options.beforeCellEdit) {
              canEdit = options.beforeCellEdit(this.CellEdited.GridRow.Id, this.CellEdited.Element, this.CellEdited.GridColumn.Name, this.CellEdited.Value, value, this.CellEdited.RowIndex, this.CellEdited.ColumnIndex);
            }
            if (canEdit) {
              el.innerText = value;
              cell.Value = value;
              cell.HasValueChanged = true;
              cell.GridRow.Data[cell.GridColumn.Name] = value;
              valueSet = false;
              ref = this.TableGrid.Data.rows;
              for (l = 0, len = ref.length; l < len; l++) {
                row = ref[l];
                if (valueSet) {
                  break;
                }
                key = '';
                ref1 = options.xDimension;
                for (m = 0, len1 = ref1.length; m < len1; m++) {
                  x = ref1[m];
                  key += row[x];
                }
                if (key === cell.GridRow.Data[options.idColumn]) {
                  nameParts = cell.GridColumn.Name.split('_');
                  ref2 = options.yDimension;
                  for (n = 0, len2 = ref2.length; n < len2; n++) {
                    y = ref2[n];
                    if (row[y].toString() === nameParts[0]) {
                      row[nameParts[1]] = value;
                      valueSet = true;
                      break;
                    }
                  }
                }
              }
              ref3 = this.ColumnHeader.GridColumns;
              for (index = o = 0, len3 = ref3.length; o < len3; index = ++o) {
                column = ref3[index];
                if (column.Readonly && column.GetValue) {
                  cellValue = column.GetValue(cell.GridRow.Data);
                  readOnlyCell = cell.GridRow.GridCells[index];
                  cell.GridRow.Data[column.Name] = cellValue;
                  readOnlyCell.Element.html(cellValue);
                }
              }
              this.TableGrid.Edited = true;
            }
          });
          input.css('height', el.offsetHeight).appendTo(inputContainer);
          $(':input', input).css('height', el.offsetHeight).focus();
        }
      }

      updateCell(cell, value) {
        var key, l, len, len1, len2, m, n, nameParts, options, ref, ref1, ref2, row, valueSet, x, y;
        options = this.TableGrid.Options;
        valueSet = false;
        ref = this.TableGrid.Data.rows;
        for (l = 0, len = ref.length; l < len; l++) {
          row = ref[l];
          if (valueSet) {
            break;
          }
          key = '';
          ref1 = options.xDimension;
          for (m = 0, len1 = ref1.length; m < len1; m++) {
            x = ref1[m];
            key += row[x];
          }
          if (key === cell.GridRow.Data[options.idColumn]) {
            nameParts = cell.GridColumn.Name.split('_');
            ref2 = options.yDimension;
            for (n = 0, len2 = ref2.length; n < len2; n++) {
              y = ref2[n];
              if (row[y].toString() === nameParts[0]) {
                row[nameParts[1]] = value;
                valueSet = true;
                break;
              }
            }
          }
        }
      }

      moveLeft() {
        var cell, row;
        if (this.CellEdited) {
          if (this.CellEdited.ColumnIndex === 1) {
            return;
          }
          row = this.Rows[this.CellEdited.RowIndex];
          cell = row.GridCells[this.CellEdited.ColumnIndex - 1];
          this.editCell(cell);
        } else if (this.CellSelected) {
          if (this.CellSelected.ColumnIndex === 1) {
            return;
          }
          row = this.Rows[this.CellSelected.RowIndex];
          cell = row.GridCells[this.CellSelected.ColumnIndex - 1];
          this.selectCell(cell);
        }
      }

      moveUp() {
        var cell, row;
        if (this.CellSelected.RowIndex === 0) {
          return;
        }
        row = this.Rows[this.CellSelected.RowIndex - 1];
        cell = row.GridCells[this.CellSelected.ColumnIndex];
        this.selectCell(cell);
      }

      moveRight() {
        var cell, options, row, skipColumns;
        options = this.TableGrid.Options;
        skipColumns = 1;
        if (options.rowActions.length > 0) {
          skipColumns = 2;
        }
        if (this.CellEdited) {
          if (this.CellEdited.ColumnIndex === this.ColumnHeader.GridColumns.length - skipColumns) {
            return;
          }
          row = this.Rows[this.CellEdited.RowIndex];
          cell = row.GridCells[this.CellEdited.ColumnIndex + 1];
          this.editCell(cell);
        } else if (this.CellSelected) {
          if (this.CellSelected.ColumnIndex === this.ColumnHeader.GridColumns.length - skipColumns) {
            return;
          }
          row = this.Rows[this.CellSelected.RowIndex];
          cell = row.GridCells[this.CellSelected.ColumnIndex + 1];
          this.selectCell(cell);
        }
      }

      moveDown(cell, view) {
        var row;
        if (this.CellSelected.RowIndex === this.Rows.length - 1) {
          return;
        }
        row = this.Rows[this.CellSelected.RowIndex + 1];
        cell = row.GridCells[this.CellSelected.ColumnIndex];
        this.selectCell(cell);
      }

      adjustSize() {
        var setHeaderHeight, setHeaderWidth, setRowHeight;
        $('tr.tablegrid-row, tr.tablegrid-grouprow, tr.tablegrid-multiselect-row, tr.tablegrid-multiselect-grouprow, tr.tablegrid-action-row, tr.tablegrid-action-grouprow', this.TableGrid.View).css('height', '');
        $('div.tablegrid-multiselect-header th, div.tablegrid-action-header th', this.TableGrid.View).css('height', '');
        setHeaderHeight = () => {
          var headerHeight;
          headerHeight = $('div.tablegrid-header', this.TableGrid.View).height() - 1;
          $('div.tablegrid-multiselect-header th, div.tablegrid-action-header th', this.TableGrid.View).css('height', headerHeight + 'px');
        };
        setHeaderWidth = (indx, td) => {
          $('div.tablegrid-header th.tablegrid-column', this.TableGrid.View).eq(indx).css('width', $(td).outerWidth() + 'px');
        };
        setRowHeight = (indx, tr) => {
          var rowHeight, tempHeight;
          rowHeight = $(tr).height();
          if (this.MultiSelectColumn) {
            tempHeight = $('tr.tablegrid-multiselect-row', this.TableGrid.View).eq(indx).height();
            if (tempHeight > rowHeight) {
              rowHeight = tempHeight;
            }
          }
          if (this.ActionColumn) {
            tempHeight = $('tr.tablegrid-action-row', this.TableGrid.View).eq(indx).height();
            if (tempHeight > rowHeight) {
              rowHeight = tempHeight;
            }
          }
          if (this.MultiSelectColumn) {
            $('tr.tablegrid-multiselect-row, tr.tablegrid-multiselect-grouprow', this.TableGrid.View).eq(indx).css('height', rowHeight + 'px');
          }
          if (this.ActionColumn) {
            $('tr.tablegrid-action-row, tr.tablegrid-action-grouprow', this.TableGrid.View).eq(indx).css('height', rowHeight + 'px');
          }
          $(tr).css('height', rowHeight + 'px');
        };
        setTimeout(() => {
          var availableWidth, column, headerFirstRow, index, l, len, len1, len2, m, n, ref, ref1, ref2, td, totalWidth;
          $('tr.tablegrid-row, tr.tablegrid-grouprow', this.TableGrid.View).each(function(indx, tr) {
            setRowHeight(indx, tr);
          });
          totalWidth = 0;
          ref = this.ColumnHeader.GridColumns;
          for (l = 0, len = ref.length; l < len; l++) {
            column = ref[l];
            column.NewWidth = 0;
            totalWidth += parseInt(column.Width);
          }
          //what about options.width?
          if (totalWidth > 0 && totalWidth < this.TableElement.parent().outerWidth()) {
            availableWidth = this.TableElement.parent().outerWidth();
            ref1 = this.ColumnHeader.GridColumns;
            for (m = 0, len1 = ref1.length; m < len1; m++) {
              column = ref1[m];
              column.NewWidth = parseInt((column.Width / totalWidth) * availableWidth);
            }
            totalWidth = this.TableElement.parent().outerWidth();
          }
          ref2 = this.ColumnHeader.GridColumns;
          for (index = n = 0, len2 = ref2.length; n < len2; index = ++n) {
            column = ref2[index];
            td = $('td', $('tr.tablegrid-firstrow', this.TableGrid.View)).eq(index);
            if (column.NewWidth && column.NewWidth > 0) {
              td.css('width', column.NewWidth + 'px');
            } else {
              td.css('width', column.Width + 'px');
            }
          }
          if (totalWidth > 0) {
            this.TableElement.css('width', totalWidth + 'px');
          }
          $('.tablegrid-header-firstrow', $('thead', this.ColumnHeader.TableElement)).remove();
          headerFirstRow = $('tr.tablegrid-firstrow', this.TableGrid.View).clone();
          headerFirstRow.attr('id', 'tmp-id-' + $.now());
          headerFirstRow.removeClass('tablegrid-firstrow');
          headerFirstRow.addClass('tablegrid-header-firstrow');
          $('thead', this.ColumnHeader.TableElement).prepend(headerFirstRow);
          /*
          $('tr.tablegrid-firstrow td', @TableGrid.View).each (indx, td) ->
              setHeaderWidth indx, td
              return
          */
          this.ColumnHeader.TableElement.css('width', this.TableElement.outerWidth() + 'px');
          setHeaderHeight();
        }, 1);
      }

    };

    Pivot.Detail = null;

    Pivot.Box = null;

    Pivot.TableElement = null;

    Pivot.CellSelected = null;

    Pivot.CellEdited = null;

    KEY_CODES = {
      TAB: 9,
      ENTER: 13,
      ESCAPE: 27,
      ARROW_LEFT: 37,
      ARROW_UP: 38,
      ARROW_RIGHT: 39,
      ARROW_DOWN: 40,
      F2: 113
    };

    return Pivot;

  }).call(this);

  RojobaCo.PivotColumnHeader = (function() {
    class PivotColumnHeader {
      constructor(TableGrid) {
        this.TableGrid = TableGrid;
        this.GridColumns = [];
        return;
      }

      render(data) {
        var agg, column, header, l, len, len1, len2, len3, len4, len5, len6, len7, len8, m, n, o, options, pivotColumn, pivotHeader, q, r, ref, ref1, ref2, ref3, ref4, ref5, ref6, ref7, row, s, t, thead, u, x, xColumns, y;
        options = this.TableGrid.Options;
        if (this.Element) {
          this.Element.remove();
        }
        this.Element = $('<div>').addClass('tablegrid-header').appendTo(this.TableGrid.View);
        this.TableElement = $('<table>').addClass('table').appendTo(this.Element);
        thead = $('<thead>').appendTo(this.TableElement);
        pivotHeader = $('<tr>').appendTo(thead);
        $('<th>').attr('colspan', options.xDimension.length).appendTo(pivotHeader);
        xColumns = [];
        ref = data.rows;
        for (l = 0, len = ref.length; l < len; l++) {
          row = ref[l];
          ref1 = options.yDimension;
          for (m = 0, len1 = ref1.length; m < len1; m++) {
            y = ref1[m];
            if (ref2 = row[y], indexOf.call(xColumns, ref2) < 0) {
              xColumns.push(row[y]);
            }
          }
        }
        for (n = 0, len2 = xColumns.length; n < len2; n++) {
          x = xColumns[n];
          $('<th>').attr('colspan', options.aggregates.length).text(x).appendTo(pivotHeader);
        }
        header = $('<tr>').appendTo(thead);
        ref3 = options.xDimension;
        for (o = 0, len3 = ref3.length; o < len3; o++) {
          x = ref3[o];
          ref4 = options.columnModel;
          for (q = 0, len4 = ref4.length; q < len4; q++) {
            column = ref4[q];
            if (x === column.name) {
              this.GridColumns.push(new RojobaCo.GridColumn(this.TableGrid, column));
              break;
            }
          }
        }
        for (r = 0, len5 = xColumns.length; r < len5; r++) {
          x = xColumns[r];
          ref5 = options.aggregates;
          for (s = 0, len6 = ref5.length; s < len6; s++) {
            agg = ref5[s];
            ref6 = options.columnModel;
            for (t = 0, len7 = ref6.length; t < len7; t++) {
              column = ref6[t];
              if (agg.member === column.name) {
                pivotColumn = jQuery.extend({}, column);
                pivotColumn.name = x + '_' + column.name;
                this.GridColumns.push(new RojobaCo.GridColumn(this.TableGrid, pivotColumn));
                break;
              }
            }
          }
        }
        ref7 = this.GridColumns;
        for (u = 0, len8 = ref7.length; u < len8; u++) {
          column = ref7[u];
          column.render(header);
        }
      }

    };

    PivotColumnHeader.Element = null;

    PivotColumnHeader.TableElement = null;

    return PivotColumnHeader;

  }).call(this);

  RojobaCo.TableGrid = class TableGrid extends RojobaCo.BasePlugin {
    constructor(Element, Options) {
      var readOnlyAttr, superArg;
      superArg = function() {
        return this.Element;
      };
      super(superArg);
      this.Element = Element;
      this.Options = Options;
      this.Container = $('<div>').addClass('tablegrid').insertAfter(this.Element);
      if (this.Options.width && this.Options.width > 0) {
        this.Container.css('width', this.Options.width + 'px');
      }
      this.Overlay = $('<div>').addClass('tablegrid-overlay').appendTo(this.Container);
      this.Loading = $('<div>').addClass('tablegrid-loading').text(this.Options.loadingText).appendTo(this.Container);
      this.View = $('<div>').addClass('tablegrid-view').appendTo(this.Container);
      this.Data = {
        page: 1,
        records: 0,
        total: 0,
        rows: []
      };
      this.Loaded = false;
      this.Edited = false;
      this.PrevId = null;
      this.NextId = null;
      this.PageNo = 1;
      this.PageSize = this.Options.initialPageSize;
      this.Sort = {};
      this.Filter = {};
      if (this.Options.rowActions.length > 0) {
        readOnlyAttr = this.Element.attr('data-readonly');
      }
      if (this.Options.xDimension.length > 0 && this.Options.yDimension.length > 0) {
        this.Grid = new RojobaCo.Pivot(this);
      } else {
        this.Grid = new RojobaCo.Grid(this);
      }
      
      //@Grid.render @Data           
      this.hideLoading();
      this.Container.on('resize', () => {
        this.Grid.adjustSize();
      });
      $(window).on('resize', () => {
        this.Grid.adjustSize();
      });
    }

    hide() {
      this.Element.next('div').hide();
    }

    show() {
      this.Element.next('div').show();
    }

    showLoading() {
      this.Overlay.show();
      this.Loading.show();
    }

    hideLoading() {
      this.Overlay.hide();
      this.Loading.hide();
    }

    loadData(data) {
      if (!data || !data.rows) {
        data = {
          page: 1,
          records: 0,
          total: 0,
          rows: []
        };
      }
      if (data.rows.length > 0) {
        this.Element.val(data.rows.length);
      } else {
        this.Element.val('');
      }
      this.PrevId = data.prevId;
      this.NextId = data.nextId;
      this.PageNo = data.page;
      this.Data = data;
      this.Grid.render(data);
      this.hideLoading();
      if (this.Options.afterDataLoad) {
        this.Options.afterDataLoad(data.rows);
      }
    }

    setOptions(newOptions) {
      this.Options = $.extend(true, {}, this.Options, newOptions);
    }

    getOption(option) {
      return this.Options[option];
    }

    getData() {
      return this.Data.rows;
    }

    getSelectedIds() {
      var gridRow, items, l, len, ref;
      items = [];
      ref = this.Grid.Rows;
      for (l = 0, len = ref.length; l < len; l++) {
        gridRow = ref[l];
        if (gridRow instanceof RojobaCo.GridRow && gridRow.Selected) {
          items.push(gridRow.Id);
        }
      }
      return items;
    }

    getRemovedIds() {
      return this.Grid.RemovedIds;
    }

    getCell(rowIndex, columnIndex) {
      var gridCell, gridRow, result;
      result = '';
      if (rowIndex < this.Grid.Rows.length) {
        gridRow = this.Grid.Rows[rowIndex];
        if (columnIndex < gridRow.GridCells.length) {
          gridCell = gridRow.GridCells[columnIndex];
          result = gridCell.Value;
        }
      }
      return result;
    }

    updateCell(rowIndex, columnIndex, value) {
      var gridCell, gridRow;
      if (rowIndex < this.Grid.Rows.length) {
        gridRow = this.Grid.Rows[rowIndex];
        if (columnIndex < gridRow.GridCells.length) {
          gridCell = gridRow.GridCells[columnIndex];
          gridCell.Element.text(value);
          gridCell.Value = value;
          gridRow.Data[gridCell.GridColumn.Name] = value;
          this.Grid.updateCell(gridCell, value);
          if (this.Options.afterCellEdit) {
            this.Options.afterCellEdit(gridCell.GridRow.Id, gridCell.Element, gridCell.GridColumn.Name, gridCell.Value, gridCell.RowIndex, gridCell.ColumnIndex);
          }
        }
      }
    }

    getRow(rowId) {
      var l, len, ref, result, row;
      result = null;
      ref = this.Data.rows;
      for (l = 0, len = ref.length; l < len; l++) {
        row = ref[l];
        if (row[this.Options.idColumn].toString() === rowId.toString()) {
          result = row;
          break;
        }
      }
      return result;
    }

    addRow(row) {
      if (!row[this.Options.idColumn]) {
        row[this.Options.idColumn] = 'tmp-id-' + $.now();
      }
      this.Grid.addRow(row);
    }

    updateRow(row) {
      this.Grid.updateRow(row);
    }

    removeRow(id) {
      this.Grid.removeRow(id);
    }

    update() {
      if (this.Grid) {
        this.Grid.render(this.Data);
      }
    }

    sort(columnNames) {
      this.Data.rows.sort(function(a, b) {
        var aValue, bValue, columnName, l, len, val;
        for (l = 0, len = columnNames.length; l < len; l++) {
          columnName = columnNames[l];
          aValue = a[columnName];
          bValue = b[columnName];
          val = 0;
          if (isNaN(aValue)) {
            val = aValue.localeCompare(bValue);
          } else {
            val = parseFloat(aValue) - parseFloat(bValue);
          }
          if (val !== 0) {
            return val;
          }
        }
      });
      this.update();
    }

    filter(filter) {
      this.PrevId = null;
      this.NextId = null;
      this.PageNo = 1;
      this.Filter = filter;
      this.refresh();
    }

    adjustSize() {
      this.Grid.adjustSize();
    }

    reset() {
      this.PrevId = null;
      this.NextId = null;
      this.PageNo = 1;
      this.PageSize = 10;
      if (this.Grid) {
        this.Grid.reset();
      }
    }

    refresh() {
      if (this.Options.onGetData) {
        this.showLoading();
        this.Options.onGetData(this.PrevId, this.NextId, this.PageNo, this.PageSize, this.Sort, this.Filter);
      }
    }

    trigger(optionName, param) {
      var args;
      if (this.Options[optionName]) {
        args = [];
        Array.prototype.push.apply(args, arguments);
        args.shift();
        this.Options[optionName].apply(this.Options, args);
      }
    }

    clearFilter() {
      this.PrevId = null;
      this.NextId = null;
      this.PageNo = 1;
      this.Filter = {};
      this.Sort = {};
      $('i.filter-icon', this.View).remove();
      $('i.sort-icon', this.View).remove();
      this.refresh();
    }

    clear() {
      var gridRow, i, id, ids, l, len, len1, m, ref;
      ids = [];
      ref = this.Grid.Rows;
      for (l = 0, len = ref.length; l < len; l++) {
        gridRow = ref[l];
        ids.push(gridRow.Id);
      }
      for (i = m = 0, len1 = ids.length; m < len1; i = ++m) {
        id = ids[i];
        this.Data.rows.splice(0, 1);
        this.Grid.Rows.splice(0, 1);
        $('tr#' + id, this.View).remove();
        $('tr#A_' + id, this.View).remove();
        $('tr#C_' + id, this.View).remove();
      }
      if (this.Options.edit) {
        this.update();
      }
      if (this.Data.rows.length > 0) {
        this.Element.val(this.Data.rows.length);
      } else {
        this.Element.val('');
      }
    }

    clearSelection() {
      var gridRow, l, len, ref;
      $('.tablegrid-checkbox_all').prop('checked', false);
      ref = this.Grid.Rows;
      for (l = 0, len = ref.length; l < len; l++) {
        gridRow = ref[l];
        gridRow.Selected = false;
        $('#tablegrid-checkbox_' + gridRow.Id).prop('checked', false);
      }
    }

  };

  RojobaCo.SearchSelect = (function() {
    var typeIsArray, typeIsFunction, typeIsString;

    class SearchSelect extends RojobaCo.BasePlugin {
      constructor(Element, Options, Url) {
        var createListItems, searching, selected, superArg, title;
        superArg = function() {
          return this.Element;
        };
        super(superArg);
        this.Element = Element;
        this.Options = Options;
        this.Url = Url;
        title = this.Options.title;
        selected = this.Options.title;
        this.items = {};
        this.SelectComponent = $('<div>').addClass('dropdown searchselect').insertAfter(this.Element);
        this.Button = $('<button>').addClass('btn dropdown-toggle').attr('type', 'button').attr('data-toggle', 'dropdown').appendTo(this.SelectComponent);
        if (this.Options.selected.id && this.Options.selected.id.trim().length > 0 && this.Options.selected.id.trim() !== '00000000-0000-0000-0000-000000000000') {
          this.Element.val(this.Options.selected.id.trim());
        }
        if (this.Options.selected.text && this.Options.selected.text.toString().trim() !== '') {
          this.ButtonText = $('<span>').text(this.Options.selected.text.toString().trim()).addClass('float-left').appendTo(this.Button);
          this.ButtonRemoveTextIcon = $('<i>').addClass("fas fa-times-circle clearinput-icon").show().appendTo(this.Button);
        } else {
          this.ButtonText = $('<span>').text(title).addClass('float-left').appendTo(this.Button);
          this.ButtonRemoveTextIcon = $('<i>').addClass("fas fa-times-circle clearinput-icon").hide().appendTo(this.Button);
        }
        this.DropdownMenu = $('<div>').addClass('dropdown-menu').appendTo(this.SelectComponent);
        this.SearchControl = $('<div>').addClass('search-control').appendTo(this.DropdownMenu);
        this.SearchControlInput = $('<input>').addClass('form-control').appendTo(this.SearchControl);
        this.InnerDropdownMenu = $('<div>').addClass('inner show').appendTo(this.DropdownMenu);
        this.ListContainer = $('<ul>').addClass('dropdown-menu inner show').appendTo(this.InnerDropdownMenu);
        this.Element.appendTo(this.InnerDropdownMenu);
        this.Button.on('click', () => {
          var filteredItems, item, l, len, mappedItem, ref, url;
          filteredItems = [];
          if (this.Options.items && !this.Button.parent('.searchselect').hasClass('show')) {
            if (this.SearchControlInput.val().length > 2) {
              ref = this.Options.items;
              for (l = 0, len = ref.length; l < len; l++) {
                item = ref[l];
                mappedItem = this.Options.onItemMap(item);
                if (mappedItem.label.search(this.SearchControlInput.val()) > -1) {
                  filteredItems.push(item);
                }
              }
              if (this.Options.onGetData) {
                this.items = this.Options.onGetData(filteredItems);
                createListItems(this.items);
              } else {
                this.items = filteredItems;
                createListItems(this.items);
              }
            } else {
              if (this.Options.onGetData) {
                this.items = this.Options.onGetData(this.Options.items);
                createListItems(this.items);
              } else {
                this.items = this.Options.items;
                createListItems(this.items);
              }
            }
          } else if (!this.Button.parent('.searchselect').hasClass('show')) {
            url = this.Options.source;
            if (this.SearchControlInput.val().length > 2) {
              url += '&query=' + this.SearchControlInput.val();
            }
            $.ajax({
              type: 'GET',
              url: url,
              dataType: 'json',
              error: (jqXHR, textStatus, errorThrown) => {
                $(this.ListContainer).empty();
                return $('<span>').text('An error was thrown when attempting to access the server').addClass('text').appendTo(this.ListContainer);
              }
            }).done((data) => {
              if (this.Options.onGetData) {
                this.items = this.Options.onGetData(data);
                createListItems(this.items);
              } else {
                this.items = data;
                createListItems(this.items);
              }
            });
          }
        });
        //Performs ajax call after 3 characters have been inputted
        searching = 0;
        $(this.SearchControlInput).on('keydown', (e) => {
          clearTimeout(searching);
          searching = setTimeout((() => {
            var filteredItems, item, l, len, mappedItem, ref, value;
            value = $(e.target).val();
            if (value.length > 0) {
              if (this.Options.items && this.Button.parent('.searchselect').hasClass('show')) {
                filteredItems = [];
                ref = this.Options.items;
                for (l = 0, len = ref.length; l < len; l++) {
                  item = ref[l];
                  mappedItem = this.Options.onItemMap(item);
                  if (mappedItem.label.toLowerCase().search(this.SearchControlInput.val().toLowerCase()) > -1) {
                    filteredItems.push(item);
                  }
                }
                if (this.Options.onGetData) {
                  this.items = this.Options.onGetData(filteredItems);
                  createListItems(this.items);
                } else {
                  this.items = filteredItems;
                  createListItems(this.items);
                }
              } else {
                // else
                //     if @Options.onGetData
                //         @items = @Options.onGetData @Options.items
                //         createListItems(@items)
                //     else
                //         @items = @Options.items
                //         createListItems(@items)
                $(this.SearchControlInput).addClass('loading');
                $.ajax({
                  type: 'GET',
                  url: this.Options.source + '&query=' + this.SearchControlInput.val(),
                  dataType: 'json',
                  error: (jqXHR, textStatus, errorThrown) => {
                    $(this.ListContainer).empty();
                    $('<span>').text('An error was thrown when attempting to access the server').addClass('text').appendTo(this.ListContainer);
                    $(this.SearchControlInput).removeClass('loading');
                  }
                }).done((data) => {
                  var items;
                  items = data;
                  createListItems(items);
                  $(this.SearchControlInput).removeClass('loading');
                });
              }
            } else if (value.length === 0) {
              $.ajax({
                type: 'GET',
                url: this.Options.source,
                dataType: 'json'
              }).done((data) => {
                var items;
                items = data;
                createListItems(items);
              });
            }
          }), 300);
        });
        //Changes text back to default, hides the icon
        $(this.ButtonRemoveTextIcon).on('click', (e) => {
          this.ButtonText.text(title);
          this.Element.val('');
          this.ButtonRemoveTextIcon.hide();
          if (this.Options.onSelectedItemClear) {
            this.Options.onSelectedItemClear();
          }
          e.stopPropagation();
        });
        //Creates the items for the "UL".
        createListItems = (items) => {
          var item, l, len, mappedItem;
          $(this.ListContainer).empty();
          if (items.length === 0) {
            this.ListItem = $('<li>').appendTo(this.ListContainer);
            this.Item = $('<a>').appendTo(this.ListItem);
            return $('<span>').text('No results matched' + '"' + this.SearchControlInput.val() + '"').addClass('text').appendTo(this.Item);
          } else {
            for (l = 0, len = items.length; l < len; l++) {
              item = items[l];
              mappedItem = this.Options.onItemMap(item);
              this.ListItem = $('<li>').attr('data-value', mappedItem.value).text(mappedItem.label).addClass('dropdown-item').appendTo(this.ListContainer);
            }
            
            //Adds on click event to the dropdown items
            return $('.dropdown-item', this.ListContainer).on('click', (evt) => {
              var id, text;
              id = $(evt.currentTarget).data('value');
              text = $(evt.currentTarget).text();
              this.Element.val(id);
              this.ButtonRemoveTextIcon.show();
              this.ButtonText.text(text);
              $('.dropdown-item').removeClass('active');
              $(evt.currentTarget).addClass('active');
              //Returns the item selected if "onItemSelect"
              if (this.Options.onItemSelect !== null) {
                this.Options.onItemSelect(this.getSelectedData());
              }
            });
          }
        };
        return;
      }

      // Public methods
      destroy() {
        this.Element.appendTo(this.SelectComponent.parent());
        this.SelectComponent.remove();
        this.Element.removeData('SearchSelect');
      }

      setOptions(newOptions) {
        if (newOptions.onItemSelect) {
          this.Options.onItemSelect = newOptions.onItemSelect;
        }
        if (newOptions.getCount) {
          this.Options.getCount = newOptions.getCount;
        }
        if (newOptions.source) {
          this.Options.source = newOptions.source;
          this.Source = newOptions.source;
        }
        if (newOptions.onGetData) {
          this.Options.onGetData = newOptions.onGetData;
        }
        if (newOptions.onSelectedItemClear) {
          this.Options.onSelectedItemClear = newOptions.onSelectedItemClear;
        }
      }

      getSelectedData() {
        var item, l, len, ref;
        ref = this.items;
        for (l = 0, len = ref.length; l < len; l++) {
          item = ref[l];
          this.Options.onItemMap(item).value;
          if (this.Options.onItemMap(item).value === this.Element.val()) {
            return item;
          }
        }
        return null;
      }

      setValue(value, label) {
        if (value === '') {
          this.ButtonText.text(this.Options.title);
          this.Element.val(value);
        } else {
          this.ButtonText.text(label);
          this.Element.val(value);
        }
        if (this.items.length === 0) {
          this.items.push({
            id: value,
            text: label
          });
        }
        return null;
      }

    };

    typeIsArray = function(value) {
      return value && typeof value === 'object' && value instanceof Array && typeof value.length === 'number' && typeof value.splice === 'function' && !(value.propertyIsEnumerable('length'));
    };

    typeIsString = function(value) {
      return value && typeof value === 'string' && value instanceof String;
    };

    typeIsFunction = function(value) {
      return value && typeof value === 'function';
    };

    return SearchSelect;

  }).call(this);

  RojobaCo.TimeSlider = class TimeSlider extends RojobaCo.BasePlugin {
    constructor(Element, Options) {
      var handle, l, len, superArg, value, values;
      superArg = function() {
        return this.Element;
      };
      super(superArg);
      this.Element = Element;
      this.Options = Options;
      this.TimeSliderContainer = $('<div>').addClass('timeslider-container row').insertAfter(this.Element);
      //StartContainer
      this.StartTimeContainer = $('<div>').appendTo(this.TimeSliderContainer).addClass('col-1 timeslider-starttime-container');
      
      //The block that represents the start time at the end of the timeline
      this.StartTimeBlock = $('<div>').appendTo(this.StartTimeContainer).addClass('timeslider-starttime-block').text(this.Options.startTime);
      //TimeLine
      this.TimeLine = $('<div>').appendTo(this.TimeSliderContainer).addClass('timeslider-timeline col-10');
      //EndContainer
      this.EndTimeContainer = $('<div>').appendTo(this.TimeSliderContainer).addClass('col-1 timeslider-endtime-container');
      
      //The block that represents the end time at the end of the timeline
      this.EndTimeBlock = $('<div>').appendTo(this.EndTimeContainer).addClass('timeslider-endtime-block').text(this.Options.endTime);
      //Used to assign the width to the timeline so it can be called when resizing the window
      this.TimeLine.data("timelinewidth", this.TimeLine.width());
      //load existing value
      if (this.Element.val().trim().length > 0) {
        values = JSON.parse(this.Element.val());
        for (l = 0, len = values.length; l < len; l++) {
          value = values[l];
          handle = new RojobaCo.TimeSliderHandle(this.Element, this.TimeLine, this.Options);
          handle.render(value);
        }
      }
      //Handle Icon used to add Handles to the timeslider
      this.AddHandleButton = $('<i>').addClass(() => {
        if (!this.Options.canEdit) {
          return 'fas fa-plus-square float-right timeslider-add-handle hidden';
        } else {
          return 'fas fa-plus-square float-right timeslider-add-handle';
        }
      }).appendTo(this.TimeSliderContainer).on('click', (e) => {
        var timelineWidth;
        timelineWidth = this.TimeLine.outerWidth();
        handle = new RojobaCo.TimeSliderHandle(this.Element, this.TimeLine, this.Options);
        handle.render();
      });
      this.Element.appendTo(this.TimeSliderContainer);
      return;
    }

    //Public methods
    setOptions(newOptions) {
      var handle, l, len, value, values;
      if (newOptions.startTime || newOptions.endTime) {
        if (newOptions.startTime) {
          this.Options.startTime = newOptions.startTime;
          this.StartTimeBlock.text(this.Options.startTime);
        }
        if (newOptions.endTime) {
          this.Options.endTime = newOptions.endTime;
          this.EndTimeBlock.text(this.Options.endTime);
        }
        $('.timeslider-draggable').remove();
        if (this.Element.val().trim().length > 0) {
          values = JSON.parse(this.Element.val());
          for (l = 0, len = values.length; l < len; l++) {
            value = values[l];
            handle = new RojobaCo.TimeSliderHandle(this.Element, this.TimeLine, this.Options);
            handle.render(value);
          }
        }
      }
    }

  };

  RojobaCo.TimeSliderHandle = (function() {
    class TimeSliderHandle {
      constructor(Element, TimeLine, Options) {
        this.Element = Element;
        this.TimeLine = TimeLine;
        this.Options = Options;
        return;
      }

      render(value) {
        var defaultHandleTimeSpanSplit, dragPosition, endTimeSplit, handleContainerEnd, handleContainerStart, handleContainerWidth, handleText, originalPosition, originalTime, pixelsPerFiveMinutes, startTimeSplit, totalMinutes;
        originalPosition = 0;
        originalTime = '';
        handleContainerStart = 0;
        handleContainerEnd = 0;
        handleContainerWidth = 10;
        handleText = 'Break Time';
        if (value) {
          handleContainerStart = this.convertTimeToPixels(value.startTime);
          handleContainerEnd = this.convertTimeToPixels(value.endTime);
          handleContainerWidth = handleContainerEnd - handleContainerStart;
          handleText = value.name;
        } else {
          defaultHandleTimeSpanSplit = this.Options.defaultHandleTimeSpan.split(':');
          startTimeSplit = this.Options.startTime.split(':');
          endTimeSplit = this.Options.endTime.split(':');
          totalMinutes = ((+endTimeSplit[0] * 60) + +endTimeSplit[1]) - (+startTimeSplit[0] * 60 + +startTimeSplit[1]);
          pixelsPerFiveMinutes = this.TimeLine.width() / (totalMinutes / 5);
          handleContainerWidth = (+defaultHandleTimeSpanSplit[0] * 60 + +defaultHandleTimeSpanSplit[1]) / 5 * pixelsPerFiveMinutes + 0.1;
        }
        this.HandleContainer = $('<span>').draggable({
          axis: "x",
          containment: "parent",
          cursor: 'move',
          create: (event, ui) => {},
          start: function(event, ui) {
            originalPosition = $(this).offset();
            originalTime = $(this).children('.timeslider-handle-texttime').text();
          },
          drag: (event, ui) => {
            var left, parentWidth, right;
            //Width of the parent, the timeline.
            parentWidth = $(event.target).parent('.timeslider-timeline').width();
            //Left and rightmost of the element, used to calculate the time range they represent
            left = $(event.target).offset().left;
            right = $(event.target).offset().left + $(event.target).width();
            //Change text displayed to the user 
            this.HandleContainerTextTime.text(this.calculateTimeRange(parentWidth, left, right));
          },
          stop: (event, ui) => {
            var isOverlap, left, paddingLeft, width;
            isOverlap = false;
            paddingLeft = $(event.target).closest('.timeslider-timeline').offset().left;
            $('.timeslider-draggable').not($(event.target)).each((e, element) => {
              var elementPosition, width;
              elementPosition = $(element).position();
              width = $(element).outerWidth();
              if ((elementPosition.left < (ui.offset.left + $(event.target).width() - paddingLeft) && ui.offset.left - paddingLeft < elementPosition.left + width) || (ui.offset.left - paddingLeft > elementPosition.left && elementPosition.left + width > ui.offset.left - paddingLeft)) {
                if (elementPosition.left !== ui.offset.left - paddingLeft) {
                  isOverlap = true;
                }
              }
            });
            left = $(event.target).offset().left;
            width = $(event.target).width();
            if (isOverlap) {
              $(event.target).offset(originalPosition);
              $(event.target).children('.timeslider-handle-texttime').text(originalTime);
            }
            this.updateHandleContainerValue($(event.target));
          }
        }).addClass('timeslider-draggable ').data('value', {}).offset({
          left: handleContainerStart
        }).width(handleContainerWidth).appendTo(this.TimeLine);
        this.RemoveHandleContainer = $('<div>').appendTo(this.HandleContainer).addClass('timeslider-removehandle-container');
        this.RemoveHandle = $('<i>').appendTo(this.RemoveHandleContainer).addClass(() => {
          if (!this.Options.canEdit) {
            return 'fas fa-times-circle timeslider-remove-handle hidden';
          } else {
            return 'fas fa-times-circle timeslider-remove-handle';
          }
        }).on('click', (e) => {
          var objArray;
          e.stopPropagation();
          this.HandleContainer.remove();
          objArray = [];
          $('.timeslider-draggable').each(function() {
            objArray.push($(this).data('value'));
          });
          this.Element.val(JSON.stringify(objArray));
          console.log(this.Element.val());
        });
        this.Handle = $('<div>').addClass('timeslider-handle').css('width', '100%').css('height', '100%').appendTo(this.HandleContainer);
        dragPosition = 0;
        this.HandleWidthPuller = $('<div>').draggable({
          axis: 'x',
          containment: $('.timeslider-timeline'),
          cursor: 'ew-resize',
          create: (event, ui) => {},
          start: (event, ui) => {},
          drag: (event, ui) => {
            var elementWidth, elementWidthPercentage, isOverlap, left, parentWidth, right;
            //Width of the parent, the timeline.
            parentWidth = $(event.target).closest('.timeslider-timeline').width();
            isOverlap = false;
            //Left and rightmost of the element, used to calculate the time range they represent
            left = $(event.target).closest('.timeslider-draggable').offset().left;
            right = $(event.target).offset().left + $(event.target).width();
            dragPosition = 0;
            if (left > $(event.target).offset().left) {
              $(event.target).offset(ui.originalPosition);
            }
            $('.timeslider-draggable').not($(event.target).parent('.timeslider-draggable')).each(function(evt) {
              if ($(this).offset().left < $(event.target).offset().left + $(event.target).width() && $(event.target).closest('.timeslider-draggable').offset().left < $(this).offset().left) {
                dragPosition = $(this).offset().left - $(event.target).width() - 1;
                isOverlap = true;
              }
            });
            elementWidth = "";
            if (isOverlap) {
              this.HandleContainerTextTime.text(this.calculateTimeRange(parentWidth, left, dragPosition + $(event.target).width()));
              elementWidth = (dragPosition + $(event.target).width()) - left;
              isOverlap = false;
            } else {
              this.HandleContainerTextTime.text(this.calculateTimeRange(parentWidth, left, right));
              elementWidth = right - left;
            }
            //Width of the element is acquired by subtracting the right most position, by the left
            elementWidthPercentage = elementWidth / parentWidth * 100;
            //Assigning the calculated width percentage to the element as its dragged.
            this.HandleContainer.width(elementWidthPercentage + '%');
          },
          stop: (event, ui) => {
            var left, right, topOffset;
            left = $(event.target).closest('.timeslider-draggable').offset().left;
            right = $(event.target).offset().left + $(event.target).width();
            topOffset = $(event.target).offset().top;
            if (left > right) {
              $(event.target).offset({
                left: left,
                top: topOffset
              });
            } else if (dragPosition !== 0) {
              $(event.target).offset({
                left: dragPosition,
                top: topOffset
              });
              dragPosition = 0;
            }
            this.updateHandleContainerValue(this.HandleContainer);
          }
        }).offset({
          left: handleContainerWidth - 10
        }).addClass('timeslider-width-draggable').appendTo(this.Handle);
        //Used to display the text to the user "EG. Breaktime/ Tea-time"
        this.HandleContainerTextLabel = $('<div>').text(handleText).addClass('timeslider-handle-textlabel').on('click', (e) => {
          var self, text, textLabel;
          if (this.Options.canEdit) {
            self = this;
            textLabel = $(e.target);
            text = textLabel.text().trim();
            textLabel.text('');
            $('<input>').addClass('timeslider-textlabel-input').val(text).appendTo(textLabel).focus().on('click', function(e) {
              e.stopPropagation();
            }).on('keypress', function(e) {
              //On Enter key press
              if (e.keyCode === 13) {
                if ($(e.target).val().trim().length > 0) {
                  textLabel.text($(e.target).val().trim());
                } else {
                  textLabel.html('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');
                }
                $(e.target).remove();
                self.updateHandleContainerValue(self.HandleContainer);
              }
            //When the input is clicked away from
            }).on('focusout', (e) => {
              if ($(e.target).val().trim().length > 0) {
                textLabel.text($(e.target).val().trim());
              } else {
                textLabel.html('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');
              }
              $(e.target).remove();
              self.updateHandleContainerValue(self.HandleContainer);
            });
          }
        }).appendTo(this.HandleContainer);
        this.HandleContainerTextTime = $('<div>').appendTo(this.HandleContainer).addClass('timeslider-handle-texttime');
        this.HandleContainerTextTime.text(() => {
          var left, parentWidth, right;
          //Calculates the time range to be displayed to the user
          parentWidth = this.HandleContainerTextTime.closest('.timeslider-timeline').width();
          left = this.HandleContainerTextTime.parent('.timeslider-draggable').offset().left;
          right = this.HandleContainerTextTime.parent('.timeslider-draggable').offset().left + this.HandleContainerTextTime.parent('.timeslider-draggable').width();
          //return time range 
          return this.calculateTimeRange(parentWidth, left, right);
        });
        this.updateHandleContainerValue(this.HandleContainer);
        if (!this.Options.canEdit) {
          this.HandleContainer.draggable('disable');
          this.HandleWidthPuller.draggable('disable');
        }
      }

      calculateTimeRange(parentWidth, left, right) {
        var endHours, endMinutes, endRemainder, endTimeSplit, pixelsPerFiveMinutes, startHours, startMinutes, startRemainder, startTimeSplit, timeEnd, timeStart, totalMinutes;
        timeStart = '';
        timeEnd = '';
        startRemainder = 0;
        endRemainder = 0;
        startTimeSplit = this.Options.startTime.split(':');
        endTimeSplit = this.Options.endTime.split(':');
        totalMinutes = ((+endTimeSplit[0] * 60) + +endTimeSplit[1]) - (+startTimeSplit[0] * 60 + +startTimeSplit[1]);
        pixelsPerFiveMinutes = parentWidth / (totalMinutes / 5);
        startMinutes = (left - this.TimeLine.offset().left) / pixelsPerFiveMinutes;
        startHours = Math.floor(startMinutes / 12) + +startTimeSplit[0];
        if (startHours !== 24) {
          startRemainder = Math.floor(startMinutes % 12) * 5 + +startTimeSplit[1];
          if (startRemainder >= 60) {
            startHours += 1;
            startRemainder -= 60;
          }
        }
        endMinutes = (right - this.TimeLine.offset().left) / pixelsPerFiveMinutes;
        endHours = Math.floor(endMinutes / 12) + +startTimeSplit[0];
        if (endHours !== 24) {
          endRemainder = Math.floor(endMinutes % 12) * 5 + +startTimeSplit[1];
          if (endRemainder >= 60) {
            endHours += 1;
            endRemainder -= 60;
          }
        }
        if (startHours === endHours && startRemainder > endRemainder || startHours > endHours) {
          endHours = startHours;
          //Add 5 to the end time if the user attempts to drag the width lower than the handle eg 1:15 - 1:20 instead of 1:15 - 1:15
          endRemainder = +startRemainder + 5;
        }
        timeStart = startHours + ':' + ("00" + startRemainder).slice(-2);
        timeEnd = endHours + ':' + ("00" + endRemainder).slice(-2);
        return timeStart + '-' + timeEnd;
      }

      updateHandleContainerValue(handle) {
        var obj, objArray, timeRange;
        obj = {};
        obj.name = $(handle).children('.timeslider-handle-textlabel').text();
        timeRange = $(handle).children('.timeslider-handle-texttime').text().split('-');
        obj.startTime = timeRange[0];
        obj.endTime = timeRange[1];
        //Adds the object to the data-value attribute for the handle
        $(handle).data('value', obj);
        objArray = [];
        $('.timeslider-draggable').each(function() {
          objArray.push($(this).data('value'));
        });
        this.Element.val(JSON.stringify(objArray));
      }

      convertTimeToPixels(time) {
        var endTimeSplit, hours, minutes, pixelsPerFiveMinutes, positionFromLeft, startTimeSplit, testTimer, timeSplit, timelineWidth, totalMinutes;
        positionFromLeft = 0;
        timelineWidth = this.TimeLine.width();
        startTimeSplit = this.Options.startTime.split(':');
        endTimeSplit = this.Options.endTime.split(':');
        totalMinutes = ((+endTimeSplit[0] * 60) + +endTimeSplit[1]) - (+startTimeSplit[0] * 60 + +startTimeSplit[1]);
        pixelsPerFiveMinutes = timelineWidth / (totalMinutes / 5);
        timeSplit = time.split(':');
        hours = 0;
        minutes = 0;
        if (+timeSplit[1] < +startTimeSplit[1]) {
          hours = +timeSplit[0] - +startTimeSplit[0] - 1;
          minutes = 60 + +timeSplit[1] - +startTimeSplit[1];
          testTimer = hours + ':' + minutes;
        } else {
          hours = +timeSplit[0] - +startTimeSplit[0];
          minutes = +timeSplit[1] - +startTimeSplit[1];
        }
        positionFromLeft = (((hours * 60 + minutes) / 5) * pixelsPerFiveMinutes) + 0.1;
        return positionFromLeft;
      }

    };

    $(window).resize(function(event) {
      var newPixelsPerFiveMinutes, originalPixelsPerFiveMinutes, timelineNewWidth, timelineOriginalWidth;
      timelineOriginalWidth = $('.timeslider-draggable').parent('.timeslider-timeline').data('timelinewidth');
      timelineNewWidth = $('.timeslider-draggable').parent('.timeslider-timeline').width();
      originalPixelsPerFiveMinutes = timelineOriginalWidth / 288;
      newPixelsPerFiveMinutes = timelineNewWidth / 288;
      $('.timeslider-draggable').each(function(event) {
        var draggableWidthLeft, paddingLeft, value;
        paddingLeft = $(this).parent('.timeslider-timeline').offset().left;
        value = ($(this).offset().left - paddingLeft) / originalPixelsPerFiveMinutes;
        $(this).offset({
          left: (value * newPixelsPerFiveMinutes) + paddingLeft
        });
        draggableWidthLeft = $(this).offset().left + $(this).width() - 10;
        $(this).find('.timeslider-width-draggable').offset({
          left: draggableWidthLeft
        });
      });
      $('.timeslider-draggable').parent('.timeslider-timeline').data('timelinewidth', timelineNewWidth);
    });

    return TimeSliderHandle;

  }).call(this);

  RojobaCo.SvgPlonk = class SvgPlonk extends RojobaCo.BasePlugin {
    constructor(Element, Options) {
      var CircleToolMenuItemIcon, DragAndSelectTool, DrawToolMenuItemIcon, SquareToolMenuItemIcon, ToolboxHeader, appendTooltoContainer, canvasContainer, l, len, len1, m, newPlonk, plonk, plonkXCenter, plonkYCenter, plonks, randomIdString, ref, superArg, svgCanvas, tool, toolContainer, updateElementJson, url;
      superArg = function() {
        return this.Element;
      };
      super(superArg);
      this.Element = Element;
      this.Options = Options;
      //Creates a random string to be used for the ID of the canvas
      randomIdString = 'a' + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
      appendTooltoContainer = function(tool, toolContainer) {
        $.get({
          url: tool.url,
          dataType: 'xml',
          success: (data) => {
            var div;
            div = document.createElement('div');
            div.innerHTML = (new XMLSerializer).serializeToString(data.documentElement);
            toolContainer.removeClass('loading');
            toolContainer.append(div);
          }
        });
      };
      updateElementJson = () => {
        var plonks, plonksHolder;
        plonksHolder = [];
        plonks = Snap.selectAll('.svgplonk-plonk[data-plonkcanvasid=' + randomIdString + ']');
        plonks.forEach((plonk) => {
          var plonkHolder;
          plonkHolder = {};
          plonkHolder.name = plonk.attr('name');
          plonkHolder.geometry = {};
          if (plonk.hasClass('plonk-circle')) {
            plonkHolder.type = 'circle';
            plonkHolder.geometry.x = plonk.attr('cx');
            plonkHolder.geometry.y = plonk.attr('cy');
            plonkHolder.geometry.radius = plonk.attr('r');
          } else if (plonk.hasClass('plonk-line')) {
            plonkHolder.type = 'line';
            plonkHolder.geometry.x1 = plonk.attr('x1');
            plonkHolder.geometry.y1 = plonk.attr('y1');
            plonkHolder.geometry.x2 = plonk.attr('x2');
            plonkHolder.geometry.y2 = plonk.attr('y2');
          } else if (plonk.hasClass('plonk-square')) {
            plonkHolder.type = 'square';
            plonkHolder.geometry.x = plonk.attr('x');
            plonkHolder.geometry.y = plonk.attr('y');
            plonkHolder.geometry.width = plonk.attr('width');
            plonkHolder.geometry.height = plonk.attr('height');
            plonkHolder.geometry.rx = plonk.attr('rx');
          } else if (plonk.hasClass('plonk-svg-image')) {
            plonkHolder.type = 'svg-image';
            plonkHolder.geometry.x = plonk.attr('x');
            plonkHolder.geometry.y = plonk.attr('y');
            plonkHolder.geometry.width = plonk.attr('width');
            plonkHolder.geometry.height = plonk.attr('height');
            plonkHolder.geometry.rotate = plonk.attr('data-plonkrotate');
          }
          plonksHolder.push(plonkHolder);
        });
        console.log(JSON.stringify(plonksHolder));
        this.Element.val(JSON.stringify(plonksHolder));
      };
      //On move, on start and on end all relate to snap SVG's drag()
      // onMove = (dx, dy) =>
      //     if plonk.hasClass('plonk-svg-image') || plonk.hasClass('plonk-square')
      //         @attr
      //             'x': @ox + dx
      //             'y': @oy + dy

      //     else if plonk.hasClass 'plonk-circle'
      //         @attr
      //             'cx': @ox + dx
      //             'cy': @oy + dy
      //     else if plonk.hasClass 'plonk-line'
      //         @attr
      //             'x1': @ox1 + dx
      //             'x2': @ox2 + dx
      //             'y1': @oy1 + dy
      //             'y2': @oy2 + dy
      //     return

      // onStart = () ->
      //     if plonk.hasClass('plonk-svg-image') || plonk.hasClass('plonk-square')
      //         @ox = parseInt(@attr('x'))
      //         @oy = parseInt(@attr('y'))
      //     else if plonk.hasClass 'plonk-circle'
      //         @ox = parseInt(@attr('cx'))
      //         @oy = parseInt(@attr('cy'))
      //     else if plonk.hasClass 'plonk-line'
      //         @ox1 = parseInt(@attr('x1'))
      //         @ox2 = parseInt(@attr('x2'))
      //         @oy1 = parseInt(@attr('y1'))
      //         @oy2 = parseInt(@attr('y2'))
      //     return

      // onEnd = () ->
      //     #alert 'drag'
      //     updateElementJson()
      //     return
      this.SvgPlonkContainer = $('<div>').addClass('svgplonk-container row').insertAfter(this.Element);
      this.Toolbox = $('<div>').addClass('col-1 svgplonk-toolbox').appendTo(this.SvgPlonkContainer);
      canvasContainer = $('<div>').addClass('col-11 svgplonk-canvas-container').appendTo(this.SvgPlonkContainer);
      svgCanvas = $('<svg>').attr('id', randomIdString).attr('width', '100%').attr('height', '100%');
      canvasContainer.append(svgCanvas[0].outerHTML);
      this.SvgPlonkSnap = Snap('#' + randomIdString);
      if (this.Options.canvas) {
        this.SvgPlonkSnap.image(this.Options.canvas.url, 0, 0, '100%', '100%');
      }
      ToolboxHeader = $('<h2>').text('Toolbox').addClass('svgplonk-toolbox-header').appendTo(this.Toolbox);
      this.ToolboxRow = $('<div>').addClass('row svgplonk-toolcontainer-row').appendTo(this.Toolbox);
      this.DragAndSelectToolContainer = $('<div>').addClass('svgplonk-toolcontainer col-6 drag-toolcontainer').attr('data-toggle', 'tooltip').data('placement', 'right').attr('title', 'Select and Drag').appendTo(this.ToolboxRow);
      DragAndSelectTool = $('<i>').addClass('svgplonk-dragtool far fa-hand-pointer').appendTo(this.DragAndSelectToolContainer);
      this.DropDownLineToolContainer = $('<div>').addClass('svgplonk-toolcontainer col-6 line-toolcontainer btn-group dropright').attr('data-selection', 'line').appendTo(this.ToolboxRow);
      this.LineToolButton = $('<button>').attr('type', 'button').addClass('btn dropdown-toggle svgplonk-dropdown-button').attr('data-toggle', 'dropdown').attr('aria-haspopup', 'true').attr('aria-expanded', 'false').appendTo(this.DropDownLineToolContainer);
      this.LineToolIcon = $('<i>').addClass('svgplonk-linetool');
      
      //Used when the page is first loaded
      this.LineTool = $('<span>').text('/').css('font-size', '32px');
      this.LineTool.appendTo(this.LineToolButton);
      //Drop down menu for draw
      this.LineToolDropDownMenu = $('<div>').addClass('dropdown-menu').appendTo(this.DropDownLineToolContainer);
      
      //Contains the columns of the draw items
      this.LineToolDropDownMenuRow = $('<div>').addClass('row').appendTo(this.LineToolDropDownMenu);
      
      //For creating lines
      this.LineToolMenuItem = $('<div>').addClass('col-6 text-center').on('click', (e) => {
        this.LineToolButton.empty();
        this.LineTool.appendTo(this.LineToolButton);
        this.DropDownLineToolContainer.attr('data-selection', 'line');
      }).appendTo(this.LineToolDropDownMenuRow);
      DrawToolMenuItemIcon = $('<span>').text('/').css('font-size', '32px').appendTo(this.LineToolMenuItem);
      //For drawing a square
      this.SquareToolMenuItem = $('<div>').addClass('col-6').on('click', (e) => {
        this.LineToolButton.empty();
        this.LineToolIcon.appendTo(this.LineToolButton);
        this.LineToolIcon.addClass('svgplonk-linetool far fa-square');
        this.DropDownLineToolContainer.attr('data-selection', 'square');
      }).appendTo(this.LineToolDropDownMenuRow);
      SquareToolMenuItemIcon = $('<i>').addClass('far fa-square svgplonk-dropdowntool-icon').appendTo(this.SquareToolMenuItem);
      
      //For drawing a circle
      this.CircleToolMenuItem = $('<div>').addClass('col-6').on('click', (e) => {
        this.LineToolButton.empty();
        this.LineToolIcon.appendTo(this.LineToolButton);
        this.LineToolIcon.addClass('svgplonk-linetool far fa-circle');
        this.DropDownLineToolContainer.attr('data-selection', 'circle');
      }).appendTo(this.LineToolDropDownMenuRow);
      CircleToolMenuItemIcon = $('<i>').addClass('far fa-circle svgplonk-dropdowntool-icon').appendTo(this.CircleToolMenuItem);
      if (this.Options.toolbox) {
        ref = this.Options.toolbox;
        for (l = 0, len = ref.length; l < len; l++) {
          tool = ref[l];
          toolContainer = $('<div>').addClass('svgplonk-toolcontainer col-6 loading').attr('name', tool.name).attr('data-toggle', 'tooltip').data('placement', 'right').attr('title', tool.title).data('url', tool.url).appendTo(this.ToolboxRow);
          appendTooltoContainer(tool, toolContainer);
        }
      }
      
      //#Changes which tool has been selected and whether plonks can be dragged/resized or not
      $('.svgplonk-toolcontainer').on('click', (evt) => {
        var plonks;
        $('.svgplonk-toolcontainer').removeClass('selected');
        $(evt.target).closest('.svgplonk-toolcontainer').addClass('selected');
        //Determines whether the tool selected was the drag tool or not. If it was selected each plonk is given its drag() and event handles for mousedown/up
        //if false removes the ability to drag the plonks and is instead in "create" plonks mode
        if ($(evt.target).closest('.svgplonk-toolcontainer').hasClass('drag-toolcontainer')) {
          $('.svgplonk-plonk').addClass('can-drag');
          plonks = Snap.selectAll('.svgplonk-plonk');
          //Loops through the array of plonks, adding the mouse click/drag event handlers and giving each plonk its ability to be dragged
          plonks.forEach(((plonk) => {
            var mouseXpos, mouseYpos;
            mouseXpos = 0;
            mouseYpos = 0;
            
            //On mouse down stores the current position of the mouse click for use later in determining whether a click or drag occured.
            plonk.unmousedown().mousedown(function(evt) {
              mouseXpos = evt.pageX;
              mouseYpos = evt.pageY;
            });
            plonk.unmouseup().mouseup((evt) => {
              var SnapCanvas, handle0xCord, handle0yCord, handle1xCord, handle1yCord, handles, plonkBoundingBox, transformCords;
              //Determines whether a click or drag has occured.
              //Used to add/remove the handles that are used for scaling.
              if (mouseXpos === evt.pageX && mouseYpos === evt.pageY) {
                //If handles exist, removes the handles and gives drag back to the plonk that was being scaled
                if ($('.svgplonk-draghandle').length > 0) {
                  $('.svgplonk-draghandle').remove();
                  $('.rotate-plonk').remove();
                  $('.remove-plonk').remove();
                  Snap.select('.scaleable-plonk').removeClass('scaleable-plonk').drag(function(dx, dy) {
                    if (plonk.hasClass('plonk-svg-image')) {
                      if (plonk.attr('data-plonkrotate') === '0') {
                        this.attr({
                          'x': this.ox + dx,
                          'y': this.oy + dy
                        });
                      } else if (plonk.attr('data-plonkrotate') === '90') {
                        this.attr({
                          'x': this.ox + dy,
                          'y': this.oy - dx
                        });
                      } else if (plonk.attr('data-plonkrotate') === '180') {
                        this.attr({
                          'x': this.ox - dx,
                          'y': this.oy - dy
                        });
                      } else {
                        this.attr({
                          'x': this.ox - dy,
                          'y': this.oy + dx
                        });
                      }
                    } else if (plonk.hasClass('plonk-square')) {
                      this.attr({
                        'x': this.ox + dx,
                        'y': this.oy + dy
                      });
                    } else if (plonk.hasClass('plonk-circle')) {
                      this.attr({
                        'cx': this.ox + dx,
                        'cy': this.oy + dy
                      });
                    } else if (plonk.hasClass('plonk-line')) {
                      this.attr({
                        'x1': this.ox1 + dx,
                        'x2': this.ox2 + dx,
                        'y1': this.oy1 + dy,
                        'y2': this.oy2 + dy
                      });
                    }
                  //On Start
                  }, function() {
                    if (plonk.hasClass('plonk-svg-image') || plonk.hasClass('plonk-square')) {
                      this.ox = parseInt(this.attr('x'));
                      this.oy = parseInt(this.attr('y'));
                    } else if (plonk.hasClass('plonk-circle')) {
                      this.ox = parseInt(this.attr('cx'));
                      this.oy = parseInt(this.attr('cy'));
                    } else if (plonk.hasClass('plonk-line')) {
                      this.ox1 = parseInt(this.attr('x1'));
                      this.ox2 = parseInt(this.attr('x2'));
                      this.oy1 = parseInt(this.attr('y1'));
                      this.oy2 = parseInt(this.attr('y2'));
                    }
                  //On drag end
                  }, function() {
                    //alert 'drag'
                    updateElementJson();
                  });
                } else {
                  plonk.addClass('scaleable-plonk');
                  //Stops the ability to drag the plonk.
                  plonk.undrag();
                  plonkBoundingBox = plonk.getBBox();
                  plonkBoundingBox.x;
                  handles = [];
                  if (plonk.hasClass('plonk-line')) {
                    transformCords = plonk.attr('transform').global.replace('t', '').split(',');
                    if (transformCords[0] !== "") {
                      // plonk.attr 'transform', ''
                      handle0xCord = +plonk.attr('x1') + +transformCords[0];
                      handle1xCord = +plonk.attr('x2') + +transformCords[0];
                      handle0yCord = +plonk.attr('y1') + +transformCords[1];
                      handle1yCord = +plonk.attr('y2') + +transformCords[1];
                      plonk.attr({
                        'x1': handle0xCord,
                        'x2': handle1xCord,
                        'y1': handle0yCord,
                        'y2': handle1yCord
                      });
                    } else {
                      handle0xCord = +plonk.attr('x1');
                      handle1xCord = +plonk.attr('x2');
                      handle0yCord = +plonk.attr('y1');
                      handle1yCord = +plonk.attr('y2');
                      plonk.attr({
                        'x1': handle0xCord,
                        'x2': handle1xCord,
                        'y1': handle0yCord,
                        'y2': handle1yCord
                      });
                    }
                  } else {
                    handle0xCord = plonkBoundingBox.x;
                    handle0yCord = plonkBoundingBox.y;
                    handle1xCord = plonkBoundingBox.x + plonkBoundingBox.width;
                    handle1yCord = plonkBoundingBox.y + plonkBoundingBox.height;
                  }
                  SnapCanvas = Snap('#' + plonk.attr('data-plonkcanvasid'));
                  //Top left drag position
                  //On Move
                  handles[0] = SnapCanvas.circle(handle0xCord, handle0yCord, 5).addClass('svgplonk-draghandle').attr('data-handleposition', 'top-left').drag(function(dx, dy) {
                    var bottomRightHandleBBox, newWidth;
                    plonk = Snap.select('.scaleable-plonk');
                    bottomRightHandleBBox = Snap.select('.svgplonk-draghandle[data-handleposition=bottom-right]').getBBox();
                    newWidth = bottomRightHandleBBox.cx - this.getBBox().cx;
                    if (plonk.hasClass('plonk-circle')) {
                      plonk.attr({
                        'r': newWidth / 2,
                        'cx': this.getBBox().cx + plonk.getBBox().r1,
                        'cy': this.getBBox().cy + plonk.getBBox().r1
                      });
                      // 'transform': ''
                      if (this.ox + (dy + dx) / 2 < bottomRightHandleBBox.cx) {
                        this.attr({
                          'cx': this.ox + (dy + dx) / 2,
                          'cy': this.oy + (dy + dx) / 2
                        });
                      }
                    } else if (plonk.hasClass('plonk-line')) {
                      plonk.attr({
                        'x1': this.getBBox().cx,
                        'y1': this.getBBox().cy,
                        'x2': bottomRightHandleBBox.cx,
                        'y2': bottomRightHandleBBox.cy
                      });
                      // 'transform': ''
                      this.attr({
                        'cx': this.ox + dx,
                        'cy': this.oy + dy
                      });
                    } else {
                      //Makes the plonk stick to the top left handle
                      //Since the BB's are all squares, width = height
                      plonk.attr({
                        'x': this.ox + (dy + dx) / 2,
                        'y': this.oy + (dy + dx) / 2,
                        'width': newWidth,
                        'height': newWidth
                      });
                      // 'transform': ''
                      if (this.ox + (dy + dx) / 2 < bottomRightHandleBBox.cx) {
                        this.attr({
                          'cx': this.ox + (dy + dx) / 2,
                          'cy': this.oy + (dy + dx) / 2
                        });
                      }
                    }
                    $('.remove-plonk').attr({
                      'x': bottomRightHandleBBox.cx - 5,
                      'y': this.getBBox().cy - 5
                    });
                  //On Start
                  }, function() {
                    this.ox = parseInt(this.attr('cx'));
                    this.oy = parseInt(this.attr('cy'));
                  //On drag end
                  }, function() {
                    this.ox = parseInt(this.attr('cx'));
                    this.oy = parseInt(this.attr('cy'));
                    updateElementJson();
                  });
                  //Bottom right drag position
                  //On Move
                  handles[1] = SnapCanvas.circle(handle1xCord, handle1yCord, 5).addClass('svgplonk-draghandle').attr('data-handleposition', 'bottom-right').drag(function(dx, dy) {
                    var newWidth, topLeftHandleBBox;
                    plonk = Snap.select('.scaleable-plonk');
                    //Since we are only using squared Bound boxes, width = height so can use width for both.
                    topLeftHandleBBox = Snap.select('.svgplonk-draghandle[data-handleposition=top-left]').getBBox();
                    newWidth = this.getBBox().cx - topLeftHandleBBox.cx;
                    //Circles scale using radius, not height/width
                    if (plonk.hasClass('plonk-circle')) {
                      plonk.attr({
                        'r': newWidth / 2,
                        'cx': topLeftHandleBBox.cx + plonk.getBBox().r1,
                        'cy': topLeftHandleBBox.cy + plonk.getBBox().r1
                      });
                      // 'transform': ''
                      if (this.ox + (dy + dx) / 2 > topLeftHandleBBox.cx) {
                        this.attr({
                          'cx': this.ox + (dy + dx) / 2,
                          'cy': this.oy + (dy + dx) / 2
                        });
                      }
                    } else if (plonk.hasClass('plonk-line')) {
                      plonk.attr({
                        'x1': topLeftHandleBBox.cx,
                        'y1': topLeftHandleBBox.cy,
                        'x2': this.getBBox().cx,
                        'y2': this.getBBox().cy
                      });
                      // 'transform': ''
                      this.attr({
                        'cx': this.ox + dx,
                        'cy': this.oy + dy
                      });
                    } else {
                      // if plonk.attr('data-plonkrotate') == '0'
                      plonk.attr('width', newWidth);
                      plonk.attr('height', newWidth);
                      if (this.ox + (dy + dx) / 2 > topLeftHandleBBox.cx) {
                        this.attr({
                          'cx': this.ox + (dy + dx) / 2,
                          'cy': this.oy + (dy + dx) / 2
                        });
                      }
                    }
                    // else if plonk.attr('data-plonkrotate') == '90'

                    // else if plonk.attr('data-plonkrotate')
                    // else
                    $('.remove-plonk').attr({
                      'x': this.getBBox().cx - 5,
                      'y': topLeftHandleBBox.cy - 5
                    });
                  //On Start
                  }, function() {
                    this.ox = parseInt(this.attr('cx'));
                    this.oy = parseInt(this.attr('cy'));
                  //On drag end
                  }, function() {
                    this.ox = parseInt(this.attr('cx'));
                    this.oy = parseInt(this.attr('cy'));
                    updateElementJson();
                  });
                  if (plonk.hasClass('plonk-line')) {
                    handles[0].attr('style', 'cursor:move');
                    handles[1].attr('style', 'cursor:move');
                  } else {
                    handles[0].attr('style', 'cursor:nw-resize');
                    handles[1].attr('style', 'cursor:se-resize');
                  }
                  //Used to remove the plonk
                  //Change these to be files on the disk instead
                  SnapCanvas.image('https://image.flaticon.com/icons/svg/1632/1632708.svg', plonkBoundingBox.x + plonkBoundingBox.width - 5, plonkBoundingBox.y - 5, 10, 10).addClass('remove-plonk').attr('style', 'cursor:pointer').click(function(evt) {
                    $('.scaleable-plonk').remove();
                    $('.svgplonk-draghandle').remove();
                    $('.rotate-plonk').remove();
                    $('.remove-plonk').remove();
                    return updateElementJson();
                  });
                  if (plonk.hasClass('plonk-svg-image')) {
                    SnapCanvas.image('https://www.svgrepo.com/show/61328/rotate-left-circular-arrow-interface-symbol.svg', plonkBoundingBox.x + (plonkBoundingBox.width / 2) - 7.5, plonkBoundingBox.y - 15, 15, 15).addClass('rotate-plonk').attr('style', 'cursor:pointer').click(function(evt) {
                      var plonkXCenter, plonkYCenter;
                      if (+plonk.attr('data-plonkrotate') + 90 >= 360) {
                        plonk.attr('data-plonkrotate', 0);
                      } else {
                        plonk.attr('data-plonkrotate', +plonk.attr('data-plonkrotate') + 90);
                      }
                      Snap.select('.svgplonk-draghandle[data-handleposition=top-left]').transform('r90');
                      plonkXCenter = +plonkBoundingBox.x + +plonkBoundingBox.width / 2;
                      plonkYCenter = +plonkBoundingBox.y + +plonkBoundingBox.height / 2;
                      // plonk.attr 'transform', ''
                      plonk.transform('r' + plonk.attr('data-plonkrotate') + ',' + plonkXCenter + ',' + plonkYCenter);
                    });
                  }
                }
              }
            });
            plonk.drag(function(dx, dy) {
              if (plonk.hasClass('plonk-svg-image')) {
                if (plonk.attr('data-plonkrotate') === '0') {
                  this.attr({
                    'x': this.ox + dx,
                    'y': this.oy + dy
                  });
                } else if (plonk.attr('data-plonkrotate') === '90') {
                  this.attr({
                    'x': this.ox + dy,
                    'y': this.oy - dx
                  });
                } else if (plonk.attr('data-plonkrotate') === '180') {
                  this.attr({
                    'x': this.ox - dx,
                    'y': this.oy - dy
                  });
                } else {
                  this.attr({
                    'x': this.ox - dy,
                    'y': this.oy + dx
                  });
                }
              } else if (plonk.hasClass('plonk-square')) {
                this.attr({
                  'x': this.ox + dx,
                  'y': this.oy + dy
                });
              } else if (plonk.hasClass('plonk-circle')) {
                this.attr({
                  'cx': this.ox + dx,
                  'cy': this.oy + dy
                });
              } else if (plonk.hasClass('plonk-line')) {
                this.attr({
                  'x1': this.ox1 + dx,
                  'x2': this.ox2 + dx,
                  'y1': this.oy1 + dy,
                  'y2': this.oy2 + dy
                });
              }
            //On Start
            }, function() {
              if (plonk.hasClass('plonk-svg-image') || plonk.hasClass('plonk-square')) {
                this.ox = parseInt(this.attr('x'));
                this.oy = parseInt(this.attr('y'));
              } else if (plonk.hasClass('plonk-circle')) {
                this.ox = parseInt(this.attr('cx'));
                this.oy = parseInt(this.attr('cy'));
              } else if (plonk.hasClass('plonk-line')) {
                this.ox1 = parseInt(this.attr('x1'));
                this.ox2 = parseInt(this.attr('x2'));
                this.oy1 = parseInt(this.attr('y1'));
                this.oy2 = parseInt(this.attr('y2'));
              }
            //On drag end
            }, function() {
              updateElementJson();
            });
          }));
        } else {
          $('.svgplonk-plonk').removeClass('can-drag');
          //Removes the drag handles
          $('.svgplonk-draghandle').remove();
          $('.rotate-plonk').remove();
          plonks = Snap.selectAll('.svgplonk-plonk');
          plonks.forEach((function(plonk) {
            plonk.undrag();
            plonk.unmouseup();
            plonk.unmousedown();
          }));
        }
      });
      //Ajax call to get existing plonks from DB
      if (this.Options.url) {
        $.ajax({
          type: 'GET',
          url: this.Options.url,
          dataType: 'json',
          error: (jqXHR, textStatus, errorThrown) => {
            alert('There was an error when connecting to the database');
            return alert(errorThrown);
          }
        }).done((data) => {
          var len1, m, newPlonk, plonk, plonkXCenter, plonkYCenter, plonks, url;
          plonks = data;
          for (m = 0, len1 = plonks.length; m < len1; m++) {
            plonk = plonks[m];
            if (plonk.type === "svg-image") {
              //For squares width = height
              url = $('.svgplonk-toolcontainer[name=' + plonk.name + ']').data('url');
              newPlonk = this.SvgPlonkSnap.image(url, plonk.geometry.x, plonk.geometry.y, plonk.geometry.width, plonk.geometry.width);
              newPlonk.addClass('svgplonk-plonk plonk-svg-image');
              if (plonk.geometry.rotate > 0) {
                plonkXCenter = +plonk.geometry.x + +plonk.geometry.width / 2;
                plonkYCenter = +plonk.geometry.y + +plonk.geometry.height / 2;
                newPlonk.transform('r' + plonk.geometry.rotate + ',' + plonkXCenter + ',' + plonkYCenter);
              }
              newPlonk.attr({
                name: plonk.name,
                'data-plonkrotate': plonk.geometry.rotate,
                'data-plonkcanvasid': randomIdString
              });
            } else if (plonk.type === "circle") {
              //Circles use CX/CY and grow from the center of the circle by increasing its radius
              newPlonk = this.SvgPlonkSnap.circle(plonk.geometry.x, plonk.geometry.y, plonk.geometry.radius);
              newPlonk.addClass('svgplonk-plonk plonk-circle');
              newPlonk.attr({
                fill: 'none',
                stroke: '#000',
                strokeWidth: 5,
                name: plonk.name,
                'data-plonkcanvasid': randomIdString
              });
            } else if (plonk.type === "line") {
              //Lines use four co-ordinates(1 pair, x1/y1, x2/y2) to determine the start and end point of the line
              newPlonk = this.SvgPlonkSnap.line(plonk.geometry.x1, plonk.geometry.y1, plonk.geometry.x2, plonk.geometry.y2);
              newPlonk.addClass('svgplonk-plonk plonk-line');
              newPlonk.attr({
                stroke: '#000',
                strokeWidth: 5,
                name: plonk.name,
                'data-plonkcanvasid': randomIdString
              });
            } else if (plonk.type === 'square') {
              newPlonk = this.SvgPlonkSnap.rect(plonk.geometry.x, plonk.geometry.y, plonk.geometry.width, plonk.geometry.height, plonk.geometry.rx, plonk.geometry.rx);
              newPlonk.addClass('svgplonk-plonk plonk-square');
              newPlonk.attr({
                fill: 'none',
                stroke: '#000',
                strokeWidth: 5,
                name: plonk.name,
                'data-plonkcanvasid': randomIdString
              });
            }
          }
          updateElementJson();
        });
      }
      //If @Element has .val places the plonks on the canvas
      if (this.Element.val().trim().length > 0) {
        plonks = JSON.parse(this.Element.val());
        for (m = 0, len1 = plonks.length; m < len1; m++) {
          plonk = plonks[m];
          if (plonk.type === "svg-image") {
            //For squares width = height
            url = $('.svgplonk-toolcontainer[name=' + plonk.name + ']').data('url');
            newPlonk = this.SvgPlonkSnap.image(url, plonk.geometry.x, plonk.geometry.y, plonk.geometry.width, plonk.geometry.width);
            if (plonk.geometry.rotate > 0) {
              plonkXCenter = +plonk.geometry.x + +plonk.geometry.width / 2;
              plonkYCenter = +plonk.geometry.y + +plonk.geometry.height / 2;
              newPlonk.transform('r' + plonk.geometry.rotate + ',' + plonkXCenter + ',' + plonkYCenter);
            }
            newPlonk.addClass('svgplonk-plonk plonk-svg-image');
            newPlonk.attr({
              name: plonk.name,
              'data-plonkrotate': plonk.geometry.rotate,
              'data-plonkcanvasid': randomIdString
            });
          } else if (plonk.type === "circle") {
            //Circles use CX/CY and grow from the center of the circle by increasing its radius
            newPlonk = this.SvgPlonkSnap.circle(plonk.geometry.x, plonk.geometry.y, plonk.geometry.radius);
            newPlonk.addClass('svgplonk-plonk plonk-circle');
            newPlonk.attr({
              fill: 'none',
              stroke: '#000',
              strokeWidth: 5,
              name: plonk.name,
              'data-plonkcanvasid': randomIdString
            });
          } else if (plonk.type === "line") {
            //Lines use four co-ordinates(1 pair, x1/y1, x2/y2) to determine the start and end point of the line
            newPlonk = this.SvgPlonkSnap.line(plonk.geometry.x1, plonk.geometry.y1, plonk.geometry.x2, plonk.geometry.y2);
            newPlonk.addClass('svgplonk-plonk plonk-line');
            newPlonk.attr({
              stroke: '#000',
              strokeWidth: 5,
              name: plonk.name,
              'data-plonkcanvasid': randomIdString
            });
          } else if (plonk.type === 'square') {
            newPlonk = this.SvgPlonkSnap.rect(plonk.geometry.x, plonk.geometry.y, plonk.geometry.width, plonk.geometry.height, plonk.geometry.rx, plonk.geometry.rx);
            newPlonk.addClass('svgplonk-plonk plonk-square');
            newPlonk.attr({
              fill: 'none',
              stroke: '#000',
              strokeWidth: 5,
              name: plonk.name,
              'data-plonkcanvasid': randomIdString
            });
          }
        }
      }
      //Moves the @Element
      this.Element.appendTo(this.SvgPlonkContainer);
      
      //On click of the svg canvas
      this.SvgPlonkSnap.click(function(evt) {
        var lineStartCircleRadius, lineStartPoint, lineStartPointBBox, plonkHeight, plonkWidth, selectedTool;
        //Can move this out later
        plonkWidth = 50;
        plonkHeight = 50;
        lineStartCircleRadius = 5;
        if (($('.svgplonk-toolcontainer').hasClass('selected')) && (!$('.drag-toolcontainer').hasClass('selected')) && (!$('.line-toolcontainer').hasClass('selected'))) {
          $('.scaleable-plonk').removeClass('scaleable-plonk');
          selectedTool = $('.svgplonk-toolcontainer.selected');
          newPlonk = this.image(selectedTool.data('url'), evt.offsetX - plonkWidth / 2, evt.offsetY - plonkHeight / 2, plonkWidth, plonkHeight);
          newPlonk.addClass('svgplonk-plonk plonk-svg-image');
          newPlonk.attr({
            name: selectedTool.attr('name'),
            'data-plonkcanvasid': randomIdString,
            'data-plonkrotate': 0
          });
        } else if ($('.line-toolcontainer').hasClass('selected')) {
          if ($('.line-toolcontainer').attr('data-selection') === 'circle') {
            $('.scaleable-plonk').removeClass('scaleable-plonk');
            //Circles dont seem to need to be centered like other images/shapes.
            //Halfing plonkWidth as it uses radius not diameter
            newPlonk = this.circle(evt.offsetX, evt.offsetY, plonkWidth / 2);
            newPlonk.addClass('svgplonk-plonk plonk-circle');
            newPlonk.attr({
              fill: 'none',
              stroke: '#000',
              strokeWidth: 5,
              name: 'circle',
              'data-plonkcanvasid': randomIdString
            });
          } else if ($('.line-toolcontainer').attr('data-selection') === 'square') {
            $('.scaleable-plonk').removeClass('scaleable-plonk');
            newPlonk = this.rect(evt.offsetX - plonkWidth / 2, evt.offsetY - plonkHeight / 2, plonkWidth, plonkHeight, 1, 1);
            newPlonk.addClass('svgplonk-plonk plonk-square');
            newPlonk.attr({
              fill: 'none',
              stroke: '#000',
              strokeWidth: 5,
              name: 'square',
              'data-plonkcanvasid': randomIdString
            });
          } else if ($('.line-toolcontainer').attr('data-selection') === 'line') {
            $('.scaleable-plonk').removeClass('scaleable-plonk');
            lineStartPoint = Snap.select('.svgplonk-line-startpoint');
            if (lineStartPoint) {
              lineStartPointBBox = lineStartPoint.getBBox();
              newPlonk = this.line(lineStartPointBBox.x + lineStartCircleRadius, lineStartPointBBox.y + lineStartCircleRadius, evt.offsetX, evt.offsetY);
              newPlonk.addClass('svgplonk-plonk plonk-line');
              newPlonk.attr({
                stroke: '#000',
                strokeWidth: 5,
                name: 'line',
                'data-plonkcanvasid': randomIdString
              });
              $('.svgplonk-line-startpoint').remove();
            } else {
              newPlonk = this.circle(evt.offsetX, evt.offsetY, lineStartCircleRadius);
              newPlonk.addClass('svgplonk-line-startpoint');
            }
          }
        }
        updateElementJson();
      });
      return;
    }

  };

  RojobaCo.CalendarGrid = class CalendarGrid extends RojobaCo.BasePlugin {
    constructor(Element, Options) {
      var superArg;
      superArg = function() {
        return this.Element;
      };
      super(superArg);
      this.Element = Element;
      this.Options = Options;
      this.Data = this.Options.data;
      this.Month = moment(moment().format('YYYY-MM') + '-01');
      this.Container = $('<div>').addClass('calendargrid').insertAfter(this.Element);
      this.loadData(this.Data);
      return;
    }

    setOptions(newOptions) {
      this.Options = $.extend(true, {}, this.Options, newOptions);
    }

    loadData(data) {
      var day, days, daysOfTheWeek, endDate, hasProperty, heading, i, input, k, key, l, len, prevMonthDays, ref, span, startDate, startDayOfWeek, tbody, td, thead, title, tmpDate, tr, v, value;
      this.Container.empty();
      this.Data = data;
      if (!this.Data) {
        this.Data = {};
      }
      hasProperty = false;
      ref = this.Data;
      for (k in ref) {
        v = ref[k];
        hasProperty = true;
      }
      if (hasProperty) {
        this.Element.val('1');
      } else {
        this.Element.val('');
      }
      if (this.Options.month) {
        this.Month = moment(this.Options.month + '-01');
      }
      heading = $('<div>').addClass('row').appendTo(this.Container);
      startDate = moment().month(this.Month.month() - 1).date(25);
      endDate = moment().month(this.Month.month()).endOf('month');
      daysOfTheWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
      startDayOfWeek = parseInt(startDate.day());
      days = {};
      prevMonthDays = startDayOfWeek - 1;
      if (startDayOfWeek === 0) {
        prevMonthDays = 6;
      }
      if (prevMonthDays > 0) {
        tmpDate = startDate.clone();
        tmpDate.subtract(prevMonthDays, 'days');
        while (tmpDate.isBefore(startDate)) {
          days[tmpDate.format('YYYY-MM-DD')] = -1;
          tmpDate.add(1, 'days');
        }
      }
      while (startDate.isBefore(endDate)) {
        days[startDate.format('YYYY-MM-DD')] = 0;
        startDate.add(1, 'days');
      }
      this.TableElement = $('<table>').addClass('table calendargrid').appendTo(this.Container);
      thead = $('<thead>').appendTo(this.TableElement);
      tr = $('<tr>').appendTo(thead);
      for (l = 0, len = daysOfTheWeek.length; l < len; l++) {
        day = daysOfTheWeek[l];
        $('<th>').attr('scope', 'col').text(day).appendTo(tr);
      }
      tbody = $('<tbody>').appendTo(this.TableElement);
      i = 0;
      for (key in days) {
        value = days[key];
        if ((i % 7) === 0) {
          tr = $('<tr>').appendTo(tbody);
        }
        td = $('<td>').appendTo(tr);
        if (value !== -1) {
          title = $('<span>').addClass('calendargrid-date').html(moment(key).format("DD MMM")).appendTo(td);
          if (this.Options.readOnly) {
            span = $('<span>').addClass('calendargrid-input-readonly').appendTo(td);
            if (this.Data[key] && this.Data[key] !== 0) {
              span.text(this.Data[key]);
            } else {
              span.html('&nbsp;');
            }
          } else {
            input = $('<input>').attr('type', 'text').addClass('form-control calendargrid-input').data('date', key).on('change', (e) => {
              var date, ref1;
              date = $(e.currentTarget).data('date');
              value = parseFloat($(e.currentTarget).autoNumeric('get'));
              if (value === 0) {
                delete this.Data[date];
              } else {
                this.Data[date] = value;
              }
              hasProperty = false;
              ref1 = this.Data;
              for (k in ref1) {
                v = ref1[k];
                hasProperty = true;
              }
              if (hasProperty) {
                this.Element.val('1');
              } else {
                this.Element.val('');
              }
              if (this.Options.afterDayEdit) {
                this.Options.afterDayEdit(date, value);
              }
            }).appendTo(td);
            if (moment(key).isBefore(this.Month)) {
              input.addClass('calendargrid-input-prev-month');
            }
            input.autoNumeric('init', {
              aSep: '',
              mDec: 2,
              aPad: false
            });
            if (this.Options.minValue) {
              input.autoNumeric('update', {
                vMin: this.Options.minValue.toString()
              });
            }
            if (this.Options.maxValue) {
              input.autoNumeric('update', {
                vMax: this.Options.maxValue.toString()
              });
            }
            if (this.Data[key] && this.Data[key] !== 0) {
              input.val(this.Data[key]);
            }
          }
        }
        i++;
      }
    }

    getData() {
      return this.Data;
    }

  };

  RojobaCo.Router = {
    Routes: {},
    Data: {}
  };

  RojobaCo.Router.setData = function(action, callback) {
    RojobaCo.Router.Data[action] = callback;
  };

  RojobaCo.Router.register = function(action, controller) {
    RojobaCo.Router.Routes[action] = controller;
  };

  RojobaCo.Router.start = function(options) {
    $(window).on('hashchange', function() {
      var action, hash, id, parts, route;
      hash = window.location.hash;
      parts = hash.slice(1).split('/');
      action = parts[0];
      id = null;
      if (parts.length > 1) {
        id = parts[1];
      }
      if (action === '') {
        action = '/';
      }
      if (action === '/' && options.view) {
        action = options.view;
      }
      route = {
        action: action,
        id: id,
        data: null
      };
      if (options.onLoad) {
        if (RojobaCo.Router.Data[action]) {
          RojobaCo.Router.Data[action](route, function(data) {
            route.data = data;
            options.onLoad(route);
            RojobaCo.Router.Routes[action](route);
          });
        } else {
          options.onLoad(route);
          RojobaCo.Router.Routes[action](route);
        }
      } else {
        RojobaCo.Router.Routes[action](route);
      }
    });
    $(window).trigger('hashchange');
  };

  RojobaCo.DropDown = class DropDown extends RojobaCo.BasePlugin {
    constructor(Element, Options) {
      var buttonGroup, superArg;
      superArg = function() {
        return this.Element;
      };
      super(superArg);
      this.Element = Element;
      this.Options = Options;
      buttonGroup = $('<div>').addClass('btn-group b4-dropdown').insertAfter(this.Element);
      this.Button = $('<button>').addClass('btn dropdown-toggle').attr('type', 'button').attr('data-toggle', 'dropdown').text('Please select').appendTo(buttonGroup);
      this.ClearIcon = $('<i>').addClass("la la-remove clear-icon").hide().on('click', (e) => {
        if ($('option:disabled', this.Element).length > 0 && $('option:disabled', this.Element).text().length > 0) {
          this.Button.text($('option:disabled', this.Element).text());
        } else {
          this.Button.text('Please select');
        }
        this.Element.val('');
        this.ClearIcon.hide();
        if (this.Options.onOptionSelect) {
          this.Options.onOptionSelect('');
        }
        e.stopPropagation();
      }).appendTo(buttonGroup);
      if ($('option:disabled', this.Element).length > 0 && $('option:disabled', this.Element).text().length > 0) {
        this.Button.text($('option:disabled', this.Element).text());
      }
      this.Menu = $('<div>').addClass('dropdown-menu').appendTo(buttonGroup);
      this.buildMenuItems();
      this.Element.hide();
      return;
    }

    // Public methods
    destroy() {
      this.Element.removeData('DropDown');
    }

    setOptions(newOptions) {
      this.Options = $.extend(true, {}, this.Options, newOptions);
    }

    setData(data) {
      var item, l, len;
      if (data && data.length > 0) {
        $('option', this.Element).not(':disabled').remove();
        this.Menu.empty();
        for (l = 0, len = data.length; l < len; l++) {
          item = data[l];
          $('<option>').attr('value', item.value).text(item.text).appendTo(this.Element);
        }
        this.buildMenuItems();
      }
    }

    setDefault(item) {
      this.Button.text(item.text);
      this.Element.val(item.value);
    }

    buildMenuItems() {
      var itemSelect;
      itemSelect = (option) => {
        this.Element.val(option.val());
        if (this.Options.menuMode) {
          if ($('option:disabled', this.Element).length > 0 && $('option:disabled', this.Element).text().length > 0) {
            this.Button.text($('option:disabled', this.Element).text());
          } else {
            this.Button.text('Please select');
          }
        } else {
          this.Button.text(option.text());
          this.ClearIcon.show();
        }
        if (this.Options.onOptionSelect) {
          this.Options.onOptionSelect(option.val());
        }
      };
      $('option', this.Element).each((index, element) => {
        var option;
        if (!$(element).attr('hidden')) {
          option = $(element);
          $('<a>').addClass('dropdown-item').attr('href', 'javascript:void(0);').text(option.text()).on('click', function(e) {
            return itemSelect(option);
          }).appendTo(this.Menu);
        }
      });
    }

    clear() {
      this.Element.val('');
      this.Button.text('Please select');
    }

  };

  $.fn.searchselect = function(options, params) {
    var args, elements, methodCalled, value;
    args = [];
    value = null;
    methodCalled = false;
    Array.prototype.push.apply(args, arguments);
    elements = this.each(function() {
      var $this, select;
      $this = $(this);
      select = $this.data('SearchSelect');
      if (typeof options === 'string' && select && select[options]) {
        args.shift();
        value = select[options].apply(select, args);
        methodCalled = true;
      } else if (!select && typeof options !== 'string' && !params) {
        options = $.extend(true, {}, $.fn.searchselect.defaults, options);
        select = new RojobaCo.SearchSelect($this, options);
        $this.data('SearchSelect', select);
        methodCalled = false;
      }
    });
    if (methodCalled) {
      return value;
    } else {
      return elements;
    }
  };

  $.fn.searchselect.defaults = {
    source: null,
    id: 'select',
    title: 'Please select',
    inputType: 'text',
    requestType: 'GET',
    selected: '',
    items: null,
    searchable: true,
    searchPlaceholder: 'Search',
    onItemSelect: null,
    onItemMap: function(item) {
      return {
        value: item.Name,
        label: item.Name
      };
    },
    onGetData: null,
    autoLoad: false,
    onEditLoad: null,
    onSelectedItemClear: null,
    itemArraySelect: null,
    filterItems: null
  };

  $.fn.tablegrid = function(options, params) {
    var args, elements, value;
    args = [];
    value = null;
    Array.prototype.push.apply(args, arguments);
    elements = this.each(function() {
      var $this, grid;
      $this = $(this);
      grid = $this.data('TableGrid');
      if (typeof options === 'string' && grid && grid[options]) {
        args.shift();
        value = grid[options].apply(grid, args);
      } else if (!grid && typeof options !== 'string' && !params) {
        options = $.extend(true, {}, $.fn.tablegrid.defaults, options);
        grid = new RojobaCo.TableGrid($this, options);
        $this.data('TableGrid', grid);
        if (options.loadOnStart && options.onGetData) {
          options.onGetData(null, null, 1, options.initialPageSize, {}, {});
        }
      }
    });
    if (value !== null) {
      return value;
    } else {
      return elements;
    }
  };

  $.fn.tablegrid.defaults = {
    height: null,
    idColumn: 'ID',
    width: null,
    initialPageSize: 10,
    loadingText: 'Working on it...',
    groupColumn: null,
    parentColumn: null,
    expandParentColumns: false,
    loadOnStart: true,
    draggableRows: false,
    filter: true,
    edit: false,
    editOnSelect: false,
    selectData: null,
    onGetData: null,
    renderCell: null,
    afterDataLoad: null,
    afterRowAction: null,
    beforeCellEdit: null,
    afterCellEdit: null,
    beforeRowDrag: null,
    afterRowDrop: null,
    onLink: null,
    columnModel: [],
    showRowNumber: false,
    footer: false,
    hide: false,
    rowDisabled: null,
    rowAttr: null,
    multiselect: null,
    onEdit: null,
    hideParent: false,
    hideChildren: false,
    rowActions: [],
    footerActions: [],
    xDimension: [],
    yDimension: [],
    aggregates: [],
    showChildrenMultiSelect: false
  };

  $.fn.timeslider = function(options, params) {
    var args, elements, methodCalled, value;
    args = [];
    value = null;
    methodCalled = false;
    Array.prototype.push.apply(args, arguments);
    elements = this.each(function() {
      var $this, slider;
      $this = $(this);
      slider = $this.data('TimeSlider');
      if (typeof options === 'string' && slider && slider[options]) {
        args.shift();
        value = slider[options].apply(slider, args);
        methodCalled = true;
      } else if (!slider && typeof options !== 'string' && !params) {
        options = $.extend(true, {}, $.fn.timeslider.defaults, options);
        slider = new RojobaCo.TimeSlider($this, options);
        $this.data('TimeSlider', slider);
        methodCalled = false;
      }
    });
    if (methodCalled) {
      return value;
    } else {
      return elements;
    }
  };

  $.fn.timeslider.defaults = {
    canEdit: true,
    startTime: '00:00',
    endTime: '24:00',
    defaultHandleTimeSpan: '00:10'
  };

  $.fn.svgplonk = function(options, params) {
    var args, elements, methodCalled, value;
    args = [];
    value = null;
    methodCalled = false;
    Array.prototype.push.apply(args, arguments);
    elements = this.each(function() {
      var $this, plonk;
      $this = $(this);
      plonk = $this.data('SvgPlonk');
      if (typeof options === 'string' && plonk && plonk[options]) {
        args.shift();
        value = plonk[options].apply(plonk, args);
        methodCalled = true;
      } else if (!plonk && typeof options !== 'string' && !params) {
        options = $.extend(true, {}, $.fn.svgplonk.defaults, options);
        plonk = new RojobaCo.SvgPlonk($this, options);
        $this.data('SvgPlonk', plonk);
        methodCalled = false;
      }
    });
    if (methodCalled) {
      return value;
    } else {
      return elements;
    }
  };

  $.fn.svgplonk.defaults = {
    url: null,
    toolbox: null,
    canvas: null
  };

  $.fn.calendargrid = function(options, params) {
    var args, elements, methodCalled, value;
    args = [];
    value = null;
    methodCalled = false;
    Array.prototype.push.apply(args, arguments);
    elements = this.each(function() {
      var $this, grid;
      $this = $(this);
      grid = $this.data('CalendarGrid');
      if (typeof options === 'string' && grid && grid[options]) {
        args.shift();
        value = grid[options].apply(grid, args);
        methodCalled = true;
      } else if (!grid && typeof options !== 'string' && !params) {
        options = $.extend(true, {}, $.fn.calendargrid.defaults, options);
        grid = new RojobaCo.CalendarGrid($this, options);
        $this.data('CalendarGrid', grid);
        methodCalled = false;
      }
    });
    if (methodCalled) {
      return value;
    } else {
      return elements;
    }
  };

  $.fn.calendargrid.defaults = {
    readOnly: false,
    month: null,
    minValue: null,
    maxValue: null,
    data: null,
    afterDayEdit: null
  };

  $.fn.dropdown = function(options, params) {
    var args, elements, methodCalled, value;
    args = [];
    value = null;
    methodCalled = false;
    Array.prototype.push.apply(args, arguments);
    elements = this.each(function() {
      var $this, dropdown;
      $this = $(this);
      dropdown = $this.data('DropDown');
      if (typeof options === 'string' && dropdown && dropdown[options]) {
        args.shift();
        value = dropdown[options].apply(dropdown, args);
        methodCalled = true;
      } else if (!dropdown && typeof options !== 'string' && !params) {
        options = $.extend(true, {}, $.fn.dropdown.defaults, options);
        dropdown = new RojobaCo.DropDown($this, options);
        $this.data('DropDown', dropdown);
        methodCalled = false;
      }
    });
    if (methodCalled) {
      return value;
    } else {
      return elements;
    }
  };

  $.fn.dropdown.defaults = {
    menuMode: false,
    onOptionSelect: null
  };

}).call(this);
