import React from 'react'
import {
  Box,
  Button,
  Link,
  IconButton,
  Select
} from '@chakra-ui/core'
import Dashboards, { Card } from '../src/components/school/dashboardPage'
import { GrUserAdmin } from 'react-icons/gr'
import NextLink from 'next/link'

export default {
  title: 'DashboardPages'
}

export const Dashboard = () => {
  const dashboards = (
    <Box display='flex' justifyContent='center' m='auto'>
      <Button variantColor='blue'>新增</Button>
      <Select placeholder='Select option' maxW='400px' mx={4}>
        <option value='option1'>Option 1</option>
        <option value='option2'>Option 2</option>
        <option value='option3'>Option 3</option>
      </Select>
      <IconButton
        icon='edit'
        variantColor='blue'
      />
    </Box>
  )
  const plate = (
    <>
      <Box
        as='article'
        w='250px'
        bg='white'
        position='relative'
        mr='20px'
        mb='20px'
        d='inline-block'
        borderRadius='10px'
        shadow='2px 2px 6px 0px #b9b9b9'
        h='160px'
        textAlign='left'
      >
        初中
      </Box>
      <Box
        as='article'
        w='250px'
        bg='white'
        position='relative'
        mr='20px'
        mb='20px'
        d='inline-block'
        borderRadius='10px'
        shadow='2px 2px 6px 0px #b9b9b9'
        h='160px'
        textAlign='left'
      >
        初中
      </Box>
      <Box
        as='article'
        w='250px'
        bg='white'
        position='relative'
        mr='20px'
        mb='20px'
        d='inline-block'
        borderRadius='10px'
        shadow='2px 2px 6px 0px #b9b9b9'
        h='160px'
        textAlign='left'
      >
        初中
      </Box>
      <Box
        as='article'
        w='250px'
        bg='white'
        position='relative'
        mr='20px'
        mb='20px'
        d='inline-block'
        borderRadius='10px'
        shadow='2px 2px 6px 0px #b9b9b9'
        h='160px'
        textAlign='left'
      >
        初中
      </Box>
      <Box
        as='article'
        w='250px'
        bg='white'
        position='relative'
        mr='20px'
        mb='20px'
        d='inline-block'
        borderRadius='10px'
        shadow='2px 2px 6px 0px #b9b9b9'
        h='160px'
        textAlign='left'
      >
        初中
      </Box>
      <Box
        as='article'
        w='250px'
        bg='white'
        position='relative'
        mr='20px'
        mb='20px'
        d='inline-block'
        borderRadius='10px'
        shadow='2px 2px 6px 0px #b9b9b9'
        h='160px'
        textAlign='left'
      >
        初中
      </Box>
      <Box
        as='article'
        w='250px'
        bg='white'
        position='relative'
        mr='20px'
        mb='20px'
        d='inline-block'
        borderRadius='10px'
        shadow='2px 2px 6px 0px #b9b9b9'
        h='160px'
        textAlign='left'
      >
        初中
      </Box>
      <Box
        as='article'
        w='250px'
        bg='white'
        position='relative'
        mr='20px'
        mb='20px'
        d='inline-block'
        borderRadius='10px'
        shadow='2px 2px 6px 0px #b9b9b9'
        h='160px'
        textAlign='left'
      >
        初中
      </Box>
      <Box
        as='article'
        w='250px'
        bg='white'
        position='relative'
        mr='20px'
        mb='20px'
        d='inline-block'
        borderRadius='10px'
        shadow='2px 2px 6px 0px #b9b9b9'
        h='160px'
        textAlign='left'
      >
        初中
      </Box>
    </>
  )
  const schoolCard = (
    <>
      <Box
        as='article'
        w='250px'
        bg='white'
        position='relative'
        mr='20px'
        mb='20px'
        d='inline-block'
        borderRadius='10px'
        shadow='2px 2px 6px 0px #b9b9b9'
        h='160px'
        textAlign='left'
      >
        初中
      </Box>
      <Box
        as='article'
        w='250px'
        bg='white'
        position='relative'
        mr='20px'
        mb='20px'
        d='inline-block'
        borderRadius='10px'
        shadow='2px 2px 6px 0px #b9b9b9'
        h='160px'
        textAlign='left'
      >
        初中
      </Box>
      <Box
        as='article'
        w='250px'
        bg='white'
        position='relative'
        mr='20px'
        mb='20px'
        d='inline-block'
        borderRadius='10px'
        shadow='2px 2px 6px 0px #b9b9b9'
        h='160px'
        textAlign='left'
      >
        初中
      </Box>
    </>
  )
  return (
    <Dashboards
      isAdmin={
        <NextLink href='#'>
          <Link as='a' d='flex' alignItems='center'>
            <Box as={GrUserAdmin} mr={2} />學校管理員
          </Link>
        </NextLink>
      }
      dashboards={dashboards}
    >
      <Card
        title='聖若瑟教區中學第一校'
        plate={schoolCard}
      />
      <Card title='班級' left='sdfs' plate={plate} />
    </Dashboards>
  )
}
export const DashboardSelect = () => {
  return (
    <Dashboards
      isAdmin={
        <NextLink href='#'>
          <Link as='a' d='flex' alignItems='center'>
            <Box as={GrUserAdmin} mr={2} />學校管理員
          </Link>
        </NextLink>
      }
      dashboards='可以改變dashboards的内容'
    />
  )
}
export const Admin = () => {
  const dashboards = (
    <Box display='flex' justifyContent='center' m='auto'>
      <Button variantColor='blue'>新增</Button>
      <Select placeholder='Select option' maxW='400px' mx={4}>
        <option value='option1'>Option 1</option>
        <option value='option2'>Option 2</option>
        <option value='option3'>Option 3</option>
      </Select>
      <IconButton
        icon='edit'
        variantColor='blue'
      />
    </Box>
  )
  return (
    <Dashboards
      isAdmin={
        <NextLink href='#'>
          <Link as='a' d='flex' alignItems='center'>
            <Box as={GrUserAdmin} mr={2} />Admin這個位置可以改變很多東西
          </Link>
        </NextLink>
      }
      dashboards={dashboards}
    />
  )
}

export const Title = () => {
  const dashboards = (
    <Box display='flex' justifyContent='center' m='auto'>
      <Button variantColor='blue'>新增</Button>
      <Select placeholder='Select option' maxW='400px' mx={4}>
        <option value='option1'>Option 1</option>
        <option value='option2'>Option 2</option>
        <option value='option3'>Option 3</option>
      </Select>
      <IconButton
        icon='edit'
        variantColor='blue'
      />
    </Box>
  )
  return (
    <Dashboards
      dashboards={dashboards}
    >
      <Card title='大標題' />
    </Dashboards>
  )
}
export const noDivider = () => {
  const dashboards = (
    <Box display='flex' justifyContent='center' m='auto'>
      <Button variantColor='blue'>新增</Button>
      <Select placeholder='Select option' maxW='400px' mx={4}>
        <option value='option1'>Option 1</option>
        <option value='option2'>Option 2</option>
        <option value='option3'>Option 3</option>
      </Select>
      <IconButton
        icon='edit'
        variantColor='blue'
      />
    </Box>
  )
  return (
    <Dashboards
      isAdmin={
        <NextLink href='#'>
          <Link as='a' d='flex' alignItems='center'>
            <Box as={GrUserAdmin} mr={2} />管理員
          </Link>
        </NextLink>
      }
      dashboards={dashboards}
    >
      <Card title='旁邊的綫可以去掉' noDivider />
    </Dashboards>
  )
}
export const LeftandRight = () => {
  const dashboards = (
    <Box display='flex' justifyContent='center' m='auto'>
      <Button variantColor='blue'>新增</Button>
      <Select placeholder='Select option' maxW='400px' mx={4}>
        <option value='option1'>Option 1</option>
        <option value='option2'>Option 2</option>
        <option value='option3'>Option 3</option>
      </Select>
      <IconButton
        icon='edit'
        variantColor='blue'
      />
    </Box>
  )
  return (
    <Dashboards
      isAdmin={
        <NextLink href='#'>
          <Link as='a' d='flex' alignItems='center'>
            <Box as={GrUserAdmin} mr={2} />管理員
          </Link>
        </NextLink>
      }
      dashboards={dashboards}
    >
      <Card title='聖若瑟學校' left='左邊的東西可以添加' right='右邊的東西可以添加' />
    </Dashboards>
  )
}
export const Left = () => {
  const dashboards = (
    <Box display='flex' justifyContent='center' m='auto'>
      <Button variantColor='blue'>新增</Button>
      <Select placeholder='Select option' maxW='400px' mx={4}>
        <option value='option1'>Option 1</option>
        <option value='option2'>Option 2</option>
        <option value='option3'>Option 3</option>
      </Select>
      <IconButton
        icon='edit'
        variantColor='blue'
      />
    </Box>
  )
  const plate = (
    <>
      <Box
        as='article'
        w='250px'
        bg='white'
        position='relative'
        mr='20px'
        mb='20px'
        d='inline-block'
        borderRadius='10px'
        shadow='2px 2px 6px 0px #b9b9b9'
        h='160px'
        textAlign='left'
      >
        初中
      </Box>
      <Box
        as='article'
        w='250px'
        bg='white'
        position='relative'
        mr='20px'
        mb='20px'
        d='inline-block'
        borderRadius='10px'
        shadow='2px 2px 6px 0px #b9b9b9'
        h='160px'
        textAlign='left'
      >
        初中
      </Box>
      <Box
        as='article'
        w='250px'
        bg='white'
        position='relative'
        mr='20px'
        mb='20px'
        d='inline-block'
        borderRadius='10px'
        shadow='2px 2px 6px 0px #b9b9b9'
        h='160px'
        textAlign='left'
      >
        初中
      </Box>
      <Box
        as='article'
        w='250px'
        bg='white'
        position='relative'
        mr='20px'
        mb='20px'
        d='inline-block'
        borderRadius='10px'
        shadow='2px 2px 6px 0px #b9b9b9'
        h='160px'
        textAlign='left'
      >
        初中
      </Box>
      <Box
        as='article'
        w='250px'
        bg='white'
        position='relative'
        mr='20px'
        mb='20px'
        d='inline-block'
        borderRadius='10px'
        shadow='2px 2px 6px 0px #b9b9b9'
        h='160px'
        textAlign='left'
      >
        初中
      </Box>
    </>
  )
  return (
    <Dashboards
      isAdmin={
        <NextLink href='#'>
          <Link as='a' d='flex' alignItems='center'>
            <Box as={GrUserAdmin} mr={2} />管理員
          </Link>
        </NextLink>
      }
      dashboards={dashboards}
    >
      <Card title='聖若瑟學校' left={<Button variantColor='blue'>新增</Button>} plate={plate} />
      <Card title='班級' left={<Button variantColor='blue'>新增</Button>} plate={plate} />
      <Card title='可以' left={<Button variantColor='blue'>新增</Button>} plate={plate} />
      <Card title='聖若瑟學校' left={<Button variantColor='blue'>新增</Button>} plate={plate} />
    </Dashboards>
  )
}
export const Plate = () => {
  const dashboards = (
    <Box display='flex' justifyContent='center' m='auto'>
      <Button variantColor='blue'>新增</Button>
      <Select placeholder='Select option' maxW='400px' mx={4}>
        <option value='option1'>Option 1</option>
        <option value='option2'>Option 2</option>
        <option value='option3'>Option 3</option>
      </Select>
      <IconButton
        icon='edit'
        variantColor='blue'
      />
    </Box>
  )
  return (
    <Dashboards
      isAdmin={
        <NextLink href='#'>
          <Link as='a' d='flex' alignItems='center'>
            <Box as={GrUserAdmin} mr={2} />管理員
          </Link>
        </NextLink>
      }
      dashboards={dashboards}
    >
      <Card title='大標題' plate='裏面的數據自定義' />
    </Dashboards>
  )
}
