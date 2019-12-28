function initTable(elSelector) {
    var table = $(elSelector);

    // begin first table
    var t = table.DataTable({
        responsive: true,
        processing: true,
        serverSide: true,
        ajax: window.App.siteUrl + 'sektor_bisnis/list_datatable',
        columns: [{
                data: null,
                orderable: false,
                searchable: false
            },
            {
                data: 'sektor_bisnis_name'
            },
            {
                data: 'sektor_bisnis_id_smartfunding'
            },
        ],
    });

    t.on('draw.dt', function () {
        var PageInfo = table.DataTable().page.info();
        t.column(0, {
            page: 'current'
        }).nodes().each(function (cell, i) {
            cell.innerHTML = i + 1 + PageInfo.start;
        });
    });
}

jQuery(document).ready(function () {
    initTable('#m_table_1');
});