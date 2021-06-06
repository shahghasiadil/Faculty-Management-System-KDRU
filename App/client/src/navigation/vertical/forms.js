import { Copy, Circle, Box, Package, CheckCircle, RotateCw } from 'react-feather'

export default [
  {
    header: 'Forms & Tables'
  },
  {
    id: 'formElements',
    title: 'Form Elements',
    icon: <Copy size={20} />,
    children: [
      {
        id: 'input',
        title: 'Input',
        icon: <Circle size={12} />,
        navLink: '/forms/elements/input'
      },
      {
        id: 'inputGroup',
        title: 'Input Groups',
        icon: <Circle size={12} />,
        navLink: '/forms/elements/input-group'
      },
      {
        id: 'inputMask',
        title: 'Input Mask',
        icon: <Circle size={12} />,
        navLink: '/forms/elements/input-mask'
      },
      {
        id: 'textarea',
        title: 'Textarea',
        icon: <Circle size={12} />,
        navLink: '/forms/elements/textarea'
      },
      {
        id: 'checkbox',
        title: 'Checkbox',
        icon: <Circle size={12} />,
        navLink: '/forms/elements/checkbox'
      },
      {
        id: 'radio',
        title: 'Radio',
        icon: <Circle size={12} />,
        navLink: '/forms/elements/radio'
      },
      {
        id: 'switch',
        title: 'Switch',
        icon: <Circle size={12} />,
        navLink: '/forms/elements/switch'
      },
      {
        id: 'select',
        title: 'Select',
        icon: <Circle size={12} />,
        navLink: '/forms/elements/select'
      },
      {
        id: 'numberInput',
        title: 'Number Input',
        icon: <Circle size={12} />,
        navLink: '/forms/elements/number-input'
      },
      {
        id: 'fileUploader',
        title: 'File Uploader',
        icon: <Circle size={12} />,
        navLink: '/forms/elements/file-uploader'
      },
      {
        id: 'quillEditor',
        title: 'Editor',
        icon: <Circle size={12} />,
        navLink: '/forms/elements/editor'
      },
      {
        id: 'date_&_timePicker',
        title: 'Date & Time Picker',
        icon: <Circle size={12} />,
        navLink: '/forms/elements/pickers'
      }
    ]
  },
  {
    id: 'formLayouts',
    title: 'Form Layout',
    icon: <Box size={20} />,

    navLink: '/forms/layout/form-layout'
  },
  {
    id: 'wizard',
    title: 'Form Wizard',
    icon: <Package size={20} />,

    navLink: '/forms/wizard'
  },
  {
    id: 'formValidation',
    title: 'Form Validation',
    icon: <CheckCircle size={20} />,
    children: [
      {
        id: 'reactHookForm',
        title: 'React Hook Form',
        icon: <Circle size={12} />,
        navLink: '/forms/react-hook-form'
      },
      {
        id: 'reactstrapVal',
        title: 'Reactstrap',
        icon: <Circle size={12} />,
        navLink: '/forms/reactstrap-validation'
      }
    ]
  },
  {
    id: 'formRepeater',
    title: 'Form Repeater',
    icon: <RotateCw size={20} />,
    navLink: '/forms/form-repeater'
  }
]
