export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
        text: 'NEW',
      },
    },



    {
      title: true,
      name: 'Appoinment',
      wrapper: {
        element: '',
        attributes: {},
      },
    },
    {
      name: 'Appoinment',
      url: '/appoinment',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Appoinment',
          url: '/appoinment/patient',
          icon: 'icon-puzzle',
        },
      ],
    },

    {
      divider: true,
    },
    {
      title: true,
      name: 'Doctor',
    },
    {
      name: 'Doctor',
      icon: 'icon-puzzle',
      url: '/doctor',
    },
    // {
    //   title: true,
    //   name: 'Appoinment',
    // },
    // {
    //   name: 'Appoinment',
    //   icon: 'icon-puzzle',
    //   url: '/patient',
    //   isOpen: false
    // }
  ],
};