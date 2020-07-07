import React from 'react'
import {
  Box,
  Button,
  Select
} from '@chakra-ui/core'
import ClsPage from '../src/components/clsPage'
import { PostCard } from '../src/components/post'
import ChartBar from '../src/components/chart/bar'
import { Container } from '../src/components/containerPage'

import MyImage from '../static/QQ20200518181405.jpg'
import MyImage6 from '../static/timg.jpg'

export default {
  title: 'ClsPage'
}
export const Cls = () => {
  return (
    <ClsPage
      classes='Form 1A'
      clsImage={
        <Box as='section' maxW='94%' mt='20px' mb='20px' d='inline-block'>
          <Box as='div' float='none' position='relative' className='add-users-btn'>
            <Box
              as='a'
              border='1px solid #718096'
              p={{ base: '5px 16px', md: '7px 20px' }}
              borderRadius='30px'
              fontSize='13px'
              d='block'
              cursor='pointer'
              position='relative'
              zIndex='2'
              color='#718096'
              background='#ebf8ff'
            >
              <span>編輯成員</span>
            </Box>
          </Box>
        </Box>
      }
      button={
        <Button
          variant='outline'
          variantColor='blue'
        >
          九大智能分析
        </Button>
      }
    >
      <PostCard
        mb={5}
        creatorName='vivi'
        createTime='2010-9'
      />
    </ClsPage>
  )
}
export const Notitle = () => {
  return (
    <ClsPage
      clsImage={
        <Box as='section' maxW='94%' mt='20px' mb='20px' d='inline-block'>
          <Box as='div' float='none' position='relative' className='add-users-btn'>
            <Box
              as='a'
              border='1px solid #718096'
              p={{ base: '5px 16px', md: '7px 20px' }}
              borderRadius='30px'
              fontSize='13px'
              d='block'
              cursor='pointer'
              position='relative'
              zIndex='2'
              color='#718096'
              background='#ebf8ff'
            >
              <span>編輯成員</span>
            </Box>
          </Box>
        </Box>
      }
      button={
        <Button
          variant='outline'
          variantColor='blue'
        >
          九大智能分析
        </Button>
      }
    >
      <PostCard
        mb={5}
        creatorName='vivi'
        createTime='2010-9'
      />
    </ClsPage>
  )
}
export const Nobutton = () => {
  return (
    <ClsPage
      clsImage={
        <Box as='section' maxW='94%' mt='20px' d='inline-block'>
          <Box as='div' float='none' position='relative' className='add-users-btn'>
            <Box
              as='a'
              border='1px solid #718096'
              p={{ base: '5px 16px', md: '7px 20px' }}
              borderRadius='30px'
              fontSize='13px'
              d='block'
              cursor='pointer'
              position='relative'
              zIndex='2'
              color='#718096'
              background='#ebf8ff'
            >
              <span>編輯成員</span>
            </Box>
          </Box>
        </Box>
      }
    >
      <PostCard
        mb={5}
        creatorName='vivi'
        createTime='2010-9'
      />
    </ClsPage>
  )
}
export const NoTitle = () => {
  return (
    <ClsPage
      clsImage={
        <Box as='section' maxW='94%' mt='20px' d='inline-block'>
          <Box as='div' float='none' position='relative' className='add-users-btn'>
            <Box
              as='a'
              border='1px solid #718096'
              p={{ base: '5px 16px', md: '7px 20px' }}
              borderRadius='30px'
              fontSize='13px'
              d='block'
              cursor='pointer'
              position='relative'
              zIndex='2'
              color='#718096'
              background='#ebf8ff'
            >
              <span>編輯成員</span>
            </Box>
          </Box>
        </Box>
      }
    >
      <PostCard
        mb={5}
        creatorName='vivi'
        createTime='2010-9'
      />
    </ClsPage>
  )
}

export const NoPostCard = () => {
  return (
    <ClsPage
      clsImage={
        <Box as='section' maxW='94%' mt='20px' d='inline-block'>
          <Box as='div' float='none' position='relative' className='add-users-btn'>
            <Box
              as='a'
              border='1px solid #718096'
              p={{ base: '5px 16px', md: '7px 20px' }}
              borderRadius='30px'
              fontSize='13px'
              d='block'
              cursor='pointer'
              position='relative'
              zIndex='2'
              color='#718096'
              background='#ebf8ff'
            >
              <span>編輯成員</span>
            </Box>
          </Box>
        </Box>
      }
    />
  )
}
export const button = () => {
  return (
    <ClsPage
      clsImage='kfgpojg'
    >
      <PostCard
        mb={5}
        creatorName='vivi'
        createTime='2010-9'
      />
    </ClsPage>
  )
}
export const PostCards = () => {
  return (
    <ClsPage classes='Form 1A'>
      <PostCard
        mb={5}
        profilePhoto={MyImage}
        creatorName='vivi'
        createTime='2010-9'
        Posttitle='感恩節'
        content='今天天氣不錯'
      />
      <PostCard
        mb={5}
        profilePhoto={MyImage}
        creatorName='vivi'
        createTime='2010-9'
        content='今天天氣真好'
      />
      <PostCard
        mb={5}
        profilePhoto={MyImage}
        creatorName='vivi'
        createTime='2010-9'
        Posttitle='聖誕節'
      />
      <PostCard
        mb={5}
        profilePhoto={MyImage}
        creatorName='vivi'
        createTime='2010-9'
        content='今天天氣真好'
      />
      <PostCard
        mb={5}
        profilePhoto={MyImage}
        creatorName='vivi'
        createTime='2010-9'
      />
    </ClsPage>
  )
}
export const intelligence = () => {
  const intelligences = [
    '個人内省', '視覺空間',
    '數學邏輯', '自然探索',
    '人際溝通', '語言能力',
    '肢體動覺', '音樂旋律',
    '存在思考'
  ]
  const members = [
    {
      name: 'vivi2',
      num: parseInt(Math.random() * 10),
      statistic: [
        { id: '1', name: '個人内省', count: 9 },
        { id: '2', name: '音樂旋律', count: 2 },
        { id: '3', name: '個人内省', count: 9 },
        { id: '4', name: '音樂旋律', count: 2 },
        { id: '5', name: '存在思考', count: 9 },
        { id: '6', name: '音樂旋律', count: 2 },
        { id: '7', name: '存在思考', count: 9 },
        { id: '8', name: '音樂旋律', count: 2 }
      ]
    },
    {
      name: 'vivi3',
      num: parseInt(Math.random() * 10),
      statistic: [
        { id: '9', name: '個人内省', count: 9 },
        { id: '10', name: '音樂旋律', count: 2 },
        { id: '11', name: '個人内省', count: 9 },
        { id: '12', name: '音樂旋律', count: 2 },
        { id: '13', name: '存在思考', count: 9 },
        { id: '14', name: '音樂旋律', count: 2 },
        { id: '15', name: '存在思考', count: 9 },
        { id: '16', name: '音樂旋律', count: 2 }
      ]
    },
    {
      name: 'vivi4',
      num: parseInt(Math.random() * 10),
      statistic: [
        { id: '17', name: '個人内省', count: 9 },
        { id: '18', name: '音樂旋律', count: 2 },
        { id: '19', name: '個人内省', count: 9 },
        { id: '20', name: '音樂旋律', count: 2 },
        { id: '21', name: '存在思考', count: 9 },
        { id: '22', name: '音樂旋律', count: 2 },
        { id: '23', name: '存在思考', count: 9 },
        { id: '24', name: '音樂旋律', count: 2 }
      ]
    },
    {
      name: 'vivi5',
      num: parseInt(Math.random() * 10),
      statistic: [
        { id: '25', name: '個人内省', count: 9 },
        { id: '26', name: '音樂旋律', count: 2 },
        { id: '27', name: '個人内省', count: 9 },
        { id: '28', name: '音樂旋律', count: 2 },
        { id: '29', name: '存在思考', count: 9 },
        { id: '30', name: '音樂旋律', count: 2 },
        { id: '31', name: '存在思考', count: 9 },
        { id: '32', name: '音樂旋律', count: 2 }
      ]
    }
  ]

  const students = members.map(member => ({
    name: member.name,
    num: member.num,
    statistic: member.statistic,
    sum: member.statistic.length > 0
      ? member.statistic.map(s => s.count ? Number(s.count) : 0).reduce((sum, value) => sum + value)
      : 0
  }))

  const sortedStudents = [
    {
      name: 'vivi',
      num: 1,
      statistic: [
        { id: '25', name: '個人内省', count: 9 },
        { id: '26', name: '音樂旋律', count: 2 },
        { id: '27', name: '個人内省', count: 9 },
        { id: '28', name: '音樂旋律', count: 2 },
        { id: '29', name: '存在思考', count: 9 },
        { id: '30', name: '音樂旋律', count: 2 },
        { id: '31', name: '存在思考', count: 9 },
        { id: '32', name: '音樂旋律', count: 2 }
      ]
    }, {
      name: 'vivi1',
      num: 2,
      statistic: [
        { id: '25', name: '個人内省', count: 9 },
        { id: '26', name: '音樂旋律', count: 2 },
        { id: '27', name: '個人内省', count: 9 },
        { id: '28', name: '音樂旋律', count: 2 },
        { id: '29', name: '存在思考', count: 9 },
        { id: '30', name: '音樂旋律', count: 2 },
        { id: '31', name: '存在思考', count: 9 },
        { id: '32', name: '音樂旋律', count: 2 }
      ]
    }, {
      name: 'vivi2',
      num: 3,
      statistic: [
        { id: '25', name: '個人内省', count: 9 },
        { id: '26', name: '音樂旋律', count: 2 },
        { id: '27', name: '個人内省', count: 9 },
        { id: '28', name: '音樂旋律', count: 2 },
        { id: '29', name: '存在思考', count: 9 },
        { id: '30', name: '音樂旋律', count: 2 },
        { id: '31', name: '存在思考', count: 9 },
        { id: '32', name: '音樂旋律', count: 2 }
      ]
    }, {
      name: 'vivi',
      num: '3',
      statistic: [
        { id: '25', name: '個人内省', count: 9 },
        { id: '26', name: '音樂旋律', count: 2 },
        { id: '27', name: '個人内省', count: 9 },
        { id: '28', name: '音樂旋律', count: 2 },
        { id: '29', name: '存在思考', count: 9 },
        { id: '30', name: '音樂旋律', count: 2 },
        { id: '31', name: '存在思考', count: 9 },
        { id: '32', name: '音樂旋律', count: 2 }
      ]
    }]
  const users = sortedStudents.map((student) => {
    const studentInfo = { name: (`${student.name}(${student.num})`) }
    intelligences.forEach((intelligence, i) => {
      const doc = student.statistic.find(d => d.name === intelligence)
      studentInfo[(intelligence)] = doc ? Number(doc.count) : 0
    })
    return studentInfo
  })
  const barkeys = intelligences.map(intelligence => intelligence)
  return (
    <ClsPage
      classes='Form 1A'
      noTitle
      button={
        <Button
          variant='outline'
          variantColor='blue'
        >
          返回班級首頁
        </Button>
      }
    >
      <Box m={10}>
        <Box d='flex' justifyContent='center'>
          <Box textAlign='center'>
            <Select placeholder='按照學號排序'>
              <option value={0} key={0}>按照學號排序</option>
              <option value={1} key={1}>{'以最高分<->最低分排序'}</option>
              <option value={2} key={2}>{'以最低分<->最高分排序'}</option>
            </Select>
          </Box>
        </Box>

        {/* <Bar height={200} data={scoreData} options={options} /> */}
      </Box>
      <Container>
        <ChartBar barkeys={barkeys} users={users} max={Math.max(...students.map(student => student.sum), 5)} />
      </Container>
    </ClsPage>
  )
}
