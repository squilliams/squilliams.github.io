var search = instantsearch({
  // Replace with your own values
  appId: 'NJWL3M9801',
  apiKey: 'd15c5363b0021b637de39ec8c61dc439', // search only API key, no ADMIN key
  indexName: 'tedx_registrant',
  urlSync: true
});

function app(opts) {
  var search = instantsearch({
    appId: opts.appId,
    apiKey: opts.apiKey,
    indexName: opts.indexName,
    urlSync: true
  });

  var widgets = [
    instantsearch.widgets.searchBox({
      container: '#search-input',
      placeholder: 'Search for products'
    }),
    instantsearch.widgets.hits({
      container: '#hits',
      hitsPerPage: 10,
      templates: {
        item: getTemplate('hit'),
        empty: getTemplate('no-results')
      }
    }),
    instantsearch.widgets.stats({
      container: '#stats'
    }),
    instantsearch.widgets.sortBySelector({
      container: '#sort-by',
      autoHideContainer: true,
      indices: [{
        name: opts.indexName, label: 'Most relevant'
      }, {
        name: opts.indexName + '_price_asc', label: 'Lowest price'
      }, {
        name: opts.indexName + '_price_desc', label: 'Highest price'
      }]
    }),
    instantsearch.widgets.pagination({
      container: '#pagination',
      scrollTo: '#search-input'
    }),
    instantsearch.widgets.refinementList({
      container: '#category',
      attributeName: 'categories',
      limit: 10,
      operator: 'or',
      templates: {
        header: getHeader('Category')
      }
    }),
    instantsearch.widgets.refinementList({
      container: '#brand',
      attributeName: 'brand',
      limit: 10,
      operator: 'or',
      templates: {
        header: getHeader('Brand')
      }
    }),
    instantsearch.widgets.rangeSlider({
      container: '#price',
      attributeName: 'price',
      templates: {
        header: getHeader('Price')
      }
    }),
    instantsearch.widgets.refinementList({
      container: '#type',
      attributeName: 'type',
      limit: 10,
      operator: 'and',
      templates: {
        header: getHeader('Type')
      }
    })
  ];

  widgets.forEach(search.addWidget, search);
  search.start();
}

function getTemplate(templateName) {
  return document.querySelector('#' + templateName + '-template').innerHTML;
}

function getHeader(title) {
  return '<h5>' + title + '</h5>';
}