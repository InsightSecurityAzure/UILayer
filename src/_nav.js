export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
    },
    {
      name: 'Cybersecurity',
      url: '#',
      icon: 'fa fa-shield',
      children: [
        {
          name: 'CIS Benchmark',
          url: '#',
          icon: 'fa fa-university',
        }
      ],
    },
    {
      divider: true,
    },
    {
      name: 'Account Configuration',
      url: '#',
      icon: 'fa fa-cogs ',
    },
    {
      name: 'Device Code',
      url: '#',
      icon: 'icon-ban',
      attributes: { disabled: true },
    },
    {
      name: 'Compliance Score',
      url: '#',
      icon: 'icon-ban',
      attributes: { disabled: true },
    }
  ],
};
