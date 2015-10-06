module.exports.makeTable = makeTable
function makeTable(opts, filteredList) {
  opts.templateID = opts.tableDiv + "_template"
  initiateTableSorter(opts)

  if (filteredList) var data = filteredList
    else var data = opts.data
  var tableId = opts.tableDiv.slice(1)
  if (!opts.pagination) table(data, {"tableDiv": "#" + opts.targetDiv})
  var allRows = data.length
  var totalPages = Math.ceil(allRows / opts.pagination)
  var currentPage = 1
  var currentStart = (currentPage * opts.pagination) - opts.pagination
  var currentEnd = currentPage * opts.pagination
  var currentRows = data.slice(currentStart, currentEnd)
  table(currentRows, opts)
  if (opts.data.length > opts.pagination) writePreNext(opts.tableDiv, currentPage, currentPage, totalPages, data, opts.pagination)

}
