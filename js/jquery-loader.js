$( function() {
  $( "#accordion" ).accordion({
    collapsible: true,
    active: false,
    icons: false,
    heightStyle: "content",
    classes: {
      'ui-accordion': 'often-asked-questions__list',
      'ui-accordion-header': 'often-asked-questions__subheading',
      'ui-accordion-content': 'often-asked-questions__description'
    }
  })
} );
