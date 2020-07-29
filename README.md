# This is a Test project

這是一個引用了chakra-ui框架的一個npm

# 观看效果网址
https://viviui.vercel.app/?path=/story/footer--footer

# Header使用




















相关组件


- Header：为其子级提供上下文的包装器。
- HeaderButton：能接受到icon，title的按钮，以及接收其它chakra-ui的样式。
- HeaderMenuButton：菜单列表的触发器。
- DrawerItemHeader：选单的头部文字。
- DrawerItemDivider：选单的线。
- DrawerItemButton：选单的按钮。


    import{
      Header,
      HeaderButton,
      HeaderMenuButton,
      DrawerItemHeader,
      DrawerItemDivider,
      DrawerItemButton
    } from 'viviui'

用法

HeaderButton 的 Component 用法


- HeaderButton 默认在chakra响应式里小屏（sm） 的时候是隐藏

HeaderButton 能传入的参数

| 名称       | 说明                                      |
| -------- | --------------------------------------- |
| icon     | 传入 react-icons 的 icon 名字。               |
| title    | 传入 HeaderButton 的文字                     |
| chidren  | HeaderButton 的子集。                       |
| ...props | 能接受 chakra 的 Button 样式到 HeaderButton 里。 |

HeaderButton里的Props

| 名称       | 默认                                         | 描述          |
| -------- | ------------------------------------------ | ----------- |
| fontSize | {{ base: 'xs', sm: 'md', md: 'lg' }}       | 字体随屏幕而变大变小  |
| px       | {{ base: 1, sm: 4 }}                       | 内边距随屏幕而变宽变窄 |
| display  | {{ base: 'none', sm: 'none', md: 'flex' }} | 随屏幕而显示隐藏    |
| color    | gray.500                                   | 字体颜色        |
| variant  | ghost                                      | 要使用的按钮样式的变体 |




- 有 icon 的 HeaderButton


![](https://paper-attachments.dropbox.com/s_4D810874F0863F787ABE5EC187A79D50C774EE1EABF593725F3D079EBF3FDC6B_1595899667009_image.png)



    <HeaderButton icon={MdAccessibility} title='HeaderButton' />


- 没有 icon 的 HeaderButton


![](https://paper-attachments.dropbox.com/s_4D810874F0863F787ABE5EC187A79D50C774EE1EABF593725F3D079EBF3FDC6B_1595899734290_image.png)



    <HeaderButton title='首页' />

HeaderMenuButton 的 Component 用法


- MenuButton：菜单列表的触发器，需要和chakra 的 Menu 一起使用。

HeaderMenuButton 传入的参数

| 名称    | 描述                         |
| ----- | -------------------------- |
| props | 能接收到 chakra 的 MenuButton样式 |


MenuButton 和 Menu 一起使用并传入头像到 MenuButton


![](https://paper-attachments.dropbox.com/s_4D810874F0863F787ABE5EC187A79D50C774EE1EABF593725F3D079EBF3FDC6B_1595903537741_image.png)



    <Menu placement='bottom-end'>
      <MenuButton as='div'>
        <Avatar name='vivi' src={MyImage} size='sm' cursor='pointer' />
      </MenuButton>
      <MenuList w='280px'>
        <NextLink href='/' passHref>
          <MenuItem as='a'>
            <Box as={IoMdHome} mr='4px' />
            <span>返回 Macau School</span>
          </MenuItem>
        </NextLink>
        <Link href='/'>
          <MenuItem>
            <Box as={AiOutlineLogout} mr='4px' />
            <span>登出</span>
          </MenuItem>
        </Link>
      </MenuList>
    </Menu>

DrawerItemButton，DrawerItemHeader，DrawerItemDivider 的 Component 用法


- DrawerItemButton，DrawerItemHeader，DrawerItemDivider 需要和 chakra 的 Drawer 一起使用，都需要放在 Drawer 标签的 DrawerBody 里面
- DrawerItemHeader： chakra-ui Drawer的头部文字。
- DrawerItemDivider： chakra-ui Drawer的线。
- DrawerItemButton： chakra-ui Drawer的按钮。

DrawerItemButton

能接受的参数

| 名称       | 描述                          |
| -------- | --------------------------- |
| title    | 传入文字进 DrawerItemButton。     |
| icon     | 传入 react-icons 的 icon 名字。   |
| children | DrawerItemButton的子集。        |
| ...props | 能接收到 chakra-ui 的 Button 样式。 |

props

| 名称             | 默认                                      | 描述     |
| -------------- | --------------------------------------- | ------ |
| _hover         | {{ ml: '2px', background: '# CEEDFF’ }} | 鼠标移到焦点 |
| width          | 100%                                    | 宽度     |
| justifyContent | flex-start                              | 整体排列左侧 |
| bg             | none                                    | 背景     |


DrawerItemHeader

| 名称    | 描述                                     |
| ----- | -------------------------------------- |
| props | 能接收到 chakra-ui 的字体样式，children 也可以解构进去。 |

DrawerItemDivider

| 名称    | 描述                           |
| ----- | ---------------------------- |
| props | 能接收到 chakra-ui 的 Divider 样式。 |


DrawerItemButton，DrawerItemHeader，DrawerItemDivider 和 chakra 的 Drawer 一起使用


![](https://paper-attachments.dropbox.com/s_4D810874F0863F787ABE5EC187A79D50C774EE1EABF593725F3D079EBF3FDC6B_1595906402623_image.png)



    const DrawerExample = () => {
      const { isOpen, onOpen, onClose } = useDisclosure();
      return (
        <>
          <IconButton
            onClick={onOpen}
            aria-label='Navigation Menu'
            fontSize='20px'
            variant='ghost'
            icon={MdDehaze}
            marginRight='-16px'
          />
          <Drawer placement='left' onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerItemHeader borderBottomWidth='1px'>選項</DrawerItemHeader>
              <DrawerBody fontSize={{ sm: 'xs', md: 'sm' }}>
                <DrawerItemButton icon={IoMdPaper}>首頁</DrawerItemButton>
                <DrawerItemDivider />
                <DrawerItemButton icon={MdDashboard}>学校專頁</DrawerItemButton>
                <DrawerItemDivider />
                <DrawerItemButton icon={IoMdSearch}>搜索</DrawerItemButton>
                <DrawerItemDivider />
                <DrawerItemButton icon={IoMdHome}>返回 Macau School</DrawerItemButton>
                <DrawerItemDivider />
                <DrawerItemButton icon={AiOutlineLogout}>登出</DrawerItemButton>
                <DrawerItemDivider />
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </>
      )
    }

Header 的 Component 用法

| 名称             | 描述                                   |
| -------------- | ------------------------------------ |
| logo           | 自定义logo并出现在header左侧，logo的跳转路径需要自己去传。 |
| left           | 自定义header的left数据。                    |
| right          | 自定义header的right数据。                   |
| center         | 自定义header的center数据。                  |
| drawerItems    | 直接传入选单里的数据。                          |
| containerProps | 传入 chakra 能接受的 Box 样式到头部             |
| …props         | 传入 chakra 能接收的 Box 样式到最外层的 Box 里     |

props

| 名称                | 默认    | 描述      |
| ----------------- | ----- | ------- |
| pos               | fixed | 固定单位    |
| top               | 0     | 离屏幕上方为0 |
| left              | 0     | 离屏幕左方为0 |
| right             | 0     | 离屏幕右方为0 |
| zIndex            | 4     |         |
| borderBottomWidth | 1px   | 底线为1px  |
| width             | full  | 满屏      |

containerProps

| 名称       | 默认     | 描述          |
| -------- | ------ | ----------- |
| height   | 4rem   | Header 的高   |
| width    | full   | 宽满屏         |
| maxWidth | 1280px | 最大的宽为1280px |
| mx       | auto   | x轴上外边距一样    |
| px       | 8px    | x轴上内边距为8px  |



1. logo与right数据头像menu

网页版


![](https://paper-attachments.dropbox.com/s_4D810874F0863F787ABE5EC187A79D50C774EE1EABF593725F3D079EBF3FDC6B_1595836406004_image.png)


手机版


![](https://paper-attachments.dropbox.com/s_4D810874F0863F787ABE5EC187A79D50C774EE1EABF593725F3D079EBF3FDC6B_1595840297576_image.png)



![](https://paper-attachments.dropbox.com/s_4D810874F0863F787ABE5EC187A79D50C774EE1EABF593725F3D079EBF3FDC6B_1595840052042_image.png)



    <Header
      logo={
        <NextLink href='/' passHref>
          <Box
            as='a'
            d='block'
          >
            <Heading as='h1' size='lg' letterSpacing='-.1rem'>
              <Box as='span' d={{ base: 'none', sm: 'inline' }}>
                Macau School
              </Box>
              <Box as='span' d={{ base: 'inline', sm: 'none' }}>
                MS
              </Box>
              <Box as='span' color='blue.500' d={{ base: 'none', md: 'inline' }}>
                {' '}學不停
              </Box>
            </Heading>
          </Box>
        </NextLink>
      }
      right={
        <Menu placement='bottom-end'>
          <MenuButton as='div'>
            <Avatar name='vivi' src={MyImage} size='sm' cursor='pointer' />
          </MenuButton>
          <MenuList w='280px'>
            <NextLink href='/' passHref>
              <MenuItem as='a'>
                <Box as={IoMdHome} mr='4px' />
                <span>返回 Macau School</span>
              </MenuItem>
            </NextLink>
            <Link href='/'>
              <MenuItem>
                <Box as={AiOutlineLogout} mr='4px' />
                <span>登出</span>
              </MenuItem>
            </Link>
          </MenuList>
        </Menu>
      }
    />


2. 传入 logo center right 的数据案例

网页版


![](https://paper-attachments.dropbox.com/s_4D810874F0863F787ABE5EC187A79D50C774EE1EABF593725F3D079EBF3FDC6B_1595837423860_image.png)


手机版

- 点击menu前
![](https://paper-attachments.dropbox.com/s_4D810874F0863F787ABE5EC187A79D50C774EE1EABF593725F3D079EBF3FDC6B_1595840403765_image.png)

- 点击menu后
![](https://paper-attachments.dropbox.com/s_4D810874F0863F787ABE5EC187A79D50C774EE1EABF593725F3D079EBF3FDC6B_1595840377447_image.png)



    <Header
      logo={
        <NextLink href='/' passHref>
          <Box
            as='a'
            d='block'
          >
            <Heading as='h1' size='lg' letterSpacing='-.1rem'>
              <Box as='span' d={{ base: 'none', sm: 'inline' }}>
                Macau School
              </Box>
              <Box as='span' d={{ base: 'inline', sm: 'none' }}>
                MS
              </Box>
              <Box as='span' color='blue.500' d={{ base: 'none', md: 'inline' }}>
                {' '}學不停
              </Box>
            </Heading>
          </Box>
        </NextLink>
      }
    
      center={
        <>
          <HeaderButton icon={IoMdPaper} title='首頁' />
          <HeaderButton icon={MdDashboard} title='学校專頁' />
          <HeaderButton icon={IoMdSearch} title='搜索' />
        </>
      }
    
      right={
        <Menu placement='bottom-end'>
          <MenuButton as='div'>
            <Avatar name='vivi' src={MyImage} size='sm' cursor='pointer' />
          </MenuButton>
          <MenuList w='280px'>
            <NextLink href='/' passHref>
              <MenuItem as='a'>
                <Box as={IoMdHome} mr='4px' />
                <span>返回 Macau School</span>
              </MenuItem>
            </NextLink>
            <Link href='/'>
              <MenuItem>
                <Box as={AiOutlineLogout} mr='4px' />
                <span>登出</span>
              </MenuItem>
            </Link>
          </MenuList>
        </Menu>
      }
      drawerItems={
        <>
            <DrawerItemButton icon={IoMdPaper}>首頁</DrawerItemButton>
            <DrawerItemDivider />
            <DrawerItemButton icon={MdDashboard}>学校專頁</DrawerItemButton>
            <DrawerItemDivider />
            <DrawerItemButton icon={IoMdSearch}>搜索</DrawerItemButton>
            <DrawerItemDivider />
            <DrawerItemButton icon={IoMdHome}>返回 Macau School</DrawerItemButton>
            <DrawerItemDivider />
            <DrawerItemButton icon={AiOutlineLogout}>登出</DrawerItemButton>
            <DrawerItemDivider />
          </>
      }
    />

## Hero

相关组件


- Hero：为其子级提供上下文的包装器。


    import{
      Hero
    } from 'viviui'

用法

Hero的用法

Hero 能传入的参数

| 名称             | 描述                                     |
| -------------- | -------------------------------------- |
| title          | 传入标题。                                  |
| subtitle       | 传入小标题。                                 |
| noBottomBorder | 可以不要底线。                                |
| leftButton     | 输入左边按钮。                                |
| rightButton    | 输入右边按钮。                                |
| drawerItems    | 选单里的数据。                                |
| children       | Hero的子孙。                               |
| …props         | 传入 chakra 能接受的 Box 样式到 Hero 的最外层 Box 里 |

props


| 名称 | 默认    | 描述     |
| -- | ----- | ------ |
| pt | 160px | 上方的内边距 |
| pb | 94    | 下方的内边距 |



1. title，subtitle，children，children传入了按钮。


- 网页版
![](https://paper-attachments.dropbox.com/s_4D810874F0863F787ABE5EC187A79D50C774EE1EABF593725F3D079EBF3FDC6B_1595841533720_image.png)



- 手机版


![](https://paper-attachments.dropbox.com/s_4D810874F0863F787ABE5EC187A79D50C774EE1EABF593725F3D079EBF3FDC6B_1595842822794_image.png)



    <Hero
      title={
        <>
          我的學校
          <Box as='span' color='blue.500'>
            {' '}
            SCHOOL
          </Box>
        </>
      }
      subtitle='SCHOOL 是一個簡單的、多模組的線上的學校系統。可透過 SCHOOL 進行日常校園管理，了解學生學習生活，促進發掘學生閃光點等等。專為澳門中小幼學校而設。'
    >
      <Button size='lg' as='a' variantColor='blue' w={{ base: '100%', sm: 'auto' }}>
        登入到我的學校
      </Button>
    </Hero>


FeatureGrid

相关组件


- FeatrueGrid：为其子级提供上下文的包装器。
- Featrure：能接受到icon，title,subtitle,children及其它chakra-ui样式。
- FeatrueGrid 和 Featrure 需要一起使用。


    import{
      FeatrueGrid,
      Featrure
    } from 'viviui'

用法

FeatrueGrid


    children：可以自定义他的儿子，也可以使用 Featrure 的 component
    gridProps：传入 chakra 能接受的 Grid 样式到 FeatrueGrid
    ...props：传入 chakra 能接受 Box 的样式进 FeatrueGrid 的最外层 Box 里

Featrure
 

      title： 傳入title
      icon： 傳入 react-icons 的 icon 名字
      subtitle： 傳入subtitle
      children： Featrure 的子孫
      ...props： 傳入 chakra 能接受的 Box 样式到 Featrure 的最外层 Box 裏

网页版


![](https://paper-attachments.dropbox.com/s_4D810874F0863F787ABE5EC187A79D50C774EE1EABF593725F3D079EBF3FDC6B_1595847690407_image.png)


手机版


![](https://paper-attachments.dropbox.com/s_4D810874F0863F787ABE5EC187A79D50C774EE1EABF593725F3D079EBF3FDC6B_1595847825473_image.png)



    <FeatrueGrid>
      <Feature
        title='學生成長檔案'
        subtitle='SCHOOL 替每個學生都建立一個成長檔案，老師能記錄學生的學習生活，如學生的擅好，長處等。
                      使老師更能發現學生的閃光點。同學也能充分了解校園生活所帶給他的歷程。'
        icon={MdAccessibility}
      />
      <Feature
        title='學生相冊'
        subtitle='每個小朋友成長的瞬間都值得紀念。SCHOOL 提供的學生相冊除了能作為記錄學生活動相片外，也能和學生成長檔案、學生活動事件相連結。讓系統能客觀地分析學生的智能發展方向。'
        icon={MdPhoto}
      />
      <Feature
        title='與基力掛勾的學生評估表'
        subtitle='每個小朋友成長的瞬間都值得紀念。SCHOOL 提供的學生相冊除了能作為記錄學生活動相片外，也能和學生成長檔案、學生活動事件相連結。讓系統能客觀地分析學生的智能發展方向。'
        icon={MdShowChart}
      />
    </FeatrueGrid>
