import AvatarGroup from '@components/avatar-group'

const data = [
  {
    img: require('@src/assets/images/portrait/small/avatar-s-5.jpg').default
  },
  {
    img: require('@src/assets/images/portrait/small/avatar-s-7.jpg').default
  },
  {
    img: require('@src/assets/images/portrait/small/avatar-s-10.jpg').default
  },
  {
    img: require('@src/assets/images/portrait/small/avatar-s-11.jpg').default
  },
  {
    img: require('@src/assets/images/portrait/small/avatar-s-20.jpg').default
  }
]

const AvatarGroupComponent = () => {
  return <AvatarGroup data={data} />
}

export default AvatarGroupComponent
