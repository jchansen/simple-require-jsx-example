require.config({
  baseUrl: '/js',
  paths: {
    jquery: ['//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min'],
    react: ['//cdnjs.cloudflare.com/ajax/libs/react/0.12.0/react-with-addons.min'],
    'react-router': ['https://cdnjs.cloudflare.com/ajax/libs/react-router/0.11.6/react-router.min']
  },

  shim: {
    react: {
      exports: 'React'
    },

    'globalize-react-hack': {
      deps: ['react'],
      exports: 'React'
    },

    'react-router': {
      deps: ['globalize-react-hack'],
      exports: 'ReactRouter'
    }
  }
});
