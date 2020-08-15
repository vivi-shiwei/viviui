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


## FeatureGrid

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

## ModalSelector

相關組件


- ModalSelector: 包容器
- SquareButton：左侧新增按钮    
- ModalSelectorOption：弹出窗口后的 modal 数据
- EditButton：右侧編輯按钮


    import {
      ModalSelector,
      SquareButton,
      ModalSelectorOption,
      EditButton
    } from "viviui"

用法

SquareButton 的 Component 用法

SquareButton 能傳入的參數


| 名字    | 描述                                                  |
| ----- | --------------------------------------------------- |
| props | 傳入 children 和 chakra 能接受的 Button 样式到 SquareButton 裏 |


SquareButton 裏的 props


| 名字       | 默認                             | 描述        |
| -------- | ------------------------------ | --------- |
| fontSize | {{ base: '14px', md: '16px' }} | 隨著屏幕字體的變化 |


新增按鈕

![](https://paper-attachments.dropbox.com/s_4D810874F0863F787ABE5EC187A79D50C774EE1EABF593725F3D079EBF3FDC6B_1596436041439_image.png)



    <SquareButton>新增管理员</SquareButton>

EditButton

EditButton 能傳入的參數

| 名字    | 描述                                                    |
| ----- | ----------------------------------------------------- |
| props | 傳入 children 和 chakra 能接受的 IconButton 样式到 EditButton 裏 |



![](https://paper-attachments.dropbox.com/s_5DFED06E22537885E45F78FF28C7DF12C0D3C15059D03B250E0220F47FEC6BAA_1595911803974_image.png)



    <EditButton icon='edit' />

ModalSelector

ModalSelector 能傳入的參數

| 名称         | 描述                                    |
| ---------- | ------------------------------------- |
| left       | 左侧数据                                  |
| right      | 右侧数据                                  |
| value      | 自定义中间顯示的数据                            |
| children   | 点击中间value按钮时，自定义弹出的数据                 |
| modalTitle | 弹出框中的标题                               |
| …props     | 能接受 chakra 的 Box 样式到 ModalSelector 里。 |

ModalSelector 裏的 props


| 名称             | 默认     | 描述             |
| -------------- | ------ | -------------- |
| display        | flex   | 默認為 flex 類型    |
| justifyContent | center | 讓整個 Box 居中中間   |
| mt             | 10px   | 裏 top 外邊距為10px |

點擊中間前


![](https://paper-attachments.dropbox.com/s_4D810874F0863F787ABE5EC187A79D50C774EE1EABF593725F3D079EBF3FDC6B_1596439715541_image.png)


點擊中間后


![](https://paper-attachments.dropbox.com/s_4D810874F0863F787ABE5EC187A79D50C774EE1EABF593725F3D079EBF3FDC6B_1596439931823_image.png)



    const ModalSelectorTest = () => {
      const [values, setValues] = useState('cdsj6 2019/2020 Dashboard')
      return (
        <ModalSelector
          modalTitle='Dashboard 選擇'
          value={values}
          onChange={setValues}
          left={
            <SquareButton>新增</SquareButton>
          }
          right={
            <EditButton icon='edit' />
          }
        >
          <ModalSelectorOption value='cdsj6 2019/2020 Dashboard'>
            cdsj6 2019/2020 Dashboard
          </ModalSelectorOption>
          <ModalSelectorOption value='cdsj6 2020/2021 Dashboard'>
            cdsj6 2020/2021 Dashboard
          </ModalSelectorOption>
          <ModalSelectorOption value='cdsj6 2021/2022 Dashboard'>
            cdsj6 2021/2022 Dashboard
          </ModalSelectorOption>
        </ModalSelector>
      )
    }


## ModalSelector

相關組件


- ModalSelector:   包容器
- SquareButton： 左侧新增按钮    
- ModalSelectorOption： 弹出窗口后的 modal 数据
- EditButton： 右侧編輯按钮


    import {
      ModalSelector,
      SquareButton,
      ModalSelectorOption,
      EditButton
    } from "viviui"

用法

SquareButton 的 Component 用法

SquareButton 能傳入的參數


| 名字    | 描述                                                  |
| ----- | --------------------------------------------------- |
| props | 傳入 children 和 chakra 能接受的 Button 样式到 SquareButton 裏 |


SquareButton 裏的 props


| 名字       | 默認                             | 描述        |
| -------- | ------------------------------ | --------- |
| fontSize | {{ base: '14px', md: '16px' }} | 隨著屏幕字體的變化 |


新增按鈕

![](https://paper-attachments.dropbox.com/s_4D810874F0863F787ABE5EC187A79D50C774EE1EABF593725F3D079EBF3FDC6B_1596436041439_image.png)



    <SquareButton>新增管理员</SquareButton>

EditButton

EditButton 能傳入的參數

| 名字    | 描述                                                    |
| ----- | ----------------------------------------------------- |
| props | 傳入 children 和 chakra 能接受的 IconButton 样式到 EditButton 裏 |



![](https://paper-attachments.dropbox.com/s_5DFED06E22537885E45F78FF28C7DF12C0D3C15059D03B250E0220F47FEC6BAA_1595911803974_image.png)



    <EditButton icon='edit' />

ModalSelector

ModalSelector 能傳入的參數

| 名称         | 描述                                    |
| ---------- | ------------------------------------- |
| left       | 左侧数据                                  |
| right      | 右侧数据                                  |
| value      | 自定义中间顯示的数据                            |
| children   | 点击中间value按钮时，自定义弹出的数据                 |
| modalTitle | 弹出框中的标题                               |
| …props     | 能接受 chakra 的 Box 样式到 ModalSelector 里。 |

ModalSelector 裏的 props


| 名称             | 默认     | 描述             |
| -------------- | ------ | -------------- |
| display        | flex   | 默認為 flex 類型    |
| justifyContent | center | 讓整個 Box 居中中間   |
| mt             | 10px   | 裏 top 外邊距為10px |

- 點擊中間前


![](https://paper-attachments.dropbox.com/s_4D810874F0863F787ABE5EC187A79D50C774EE1EABF593725F3D079EBF3FDC6B_1596439715541_image.png)



- 點擊中間后


![](https://paper-attachments.dropbox.com/s_4D810874F0863F787ABE5EC187A79D50C774EE1EABF593725F3D079EBF3FDC6B_1596439931823_image.png)



    const ModalSelectorTest = () => {
      const [values, setValues] = useState('cdsj6 2019/2020 Dashboard')
      return (
        <ModalSelector
          modalTitle='Dashboard 選擇'
          value={values}
          onChange={setValues}
          left={
            <SquareButton>新增</SquareButton>
          }
          right={
            <EditButton icon='edit' />
          }
        >
          <ModalSelectorOption value='cdsj6 2019/2020 Dashboard'>
            cdsj6 2019/2020 Dashboard
          </ModalSelectorOption>
          <ModalSelectorOption value='cdsj6 2020/2021 Dashboard'>
            cdsj6 2020/2021 Dashboard
          </ModalSelectorOption>
          <ModalSelectorOption value='cdsj6 2021/2022 Dashboard'>
            cdsj6 2021/2022 Dashboard
          </ModalSelectorOption>
        </ModalSelector>
      )
    }




## Fieldset


- Fieldset:   横线中间有字，横线默认有
- LeftFieldsetButton:  线左边的Button


    import {
      Fieldset,
      LeftFieldsetButton
    } from "viviui"

LeftFieldsetButton的 Component 用法

LeftFieldsetButton 傳入的參數


| 名字    | 描述                                                  |
| ----- | --------------------------------------------------- |
| props | 能接受 children 及 chakra 的 Button 样式到 RoundedButton 里。 |


LeftFieldsetButton 的 props 


| 名字          | 默認                              | 描述             |
| ----------- | ------------------------------- | -------------- |
| borderWidth | 1px                             | 變框綫的寬度         |
| rounded     | 999px                           | 四角為最大的弧度       |
| minW        | {{ base: '80px', sm: '110px' }} | 最小寬度隨屏幕而變      |
| position    | absolute                        | 絕對定位           |
| top         | 0                               | 離上層固定定位的top為0  |
| left        | 0                               | 離上層固定定位的left為0 |



![](https://paper-attachments.dropbox.com/s_5DFED06E22537885E45F78FF28C7DF12C0D3C15059D03B250E0220F47FEC6BAA_1595932631027_image.png)



    <LeftFieldsetButton>新增</LeftFieldsetButton>



Fieldset 的 Component 用法


- 需要添加一個背景顔色，橫綫是橫穿在字裏的，需要給背景顔色，擋住在字后面的橫綫，不會改變整個box 的背景顔色的。

Fieldset 傳入的參數


| 名字       | 描述                               |
| -------- | -------------------------------- |
| title    | 横线上的标题                           |
| left     | 标题左侧數據                           |
| children | 子集内容                             |
| …props   | 能接受 chakra 的 Box 样式到 Fieldset 里。 |


Fieldset 的 props 


| 名字        | 默認       | 描述            |
| --------- | -------- | ------------- |
| position  | relative | 固定定位，從而改變綫的類型 |
| width     | full     | 寬為滿屏          |
| textAlign | center   | 字在 Box 的中間    |
| my        | 20px     | 在Y軸上，外邊距為20px |

- 左邊沒有按鈕時


![](https://paper-attachments.dropbox.com/s_4D810874F0863F787ABE5EC187A79D50C774EE1EABF593725F3D079EBF3FDC6B_1596446016651_image.png)



    <Fieldset title='班級' bg='white' />


- 左邊有按鈕


![](https://paper-attachments.dropbox.com/s_4D810874F0863F787ABE5EC187A79D50C774EE1EABF593725F3D079EBF3FDC6B_1596446230811_image.png)



    <Fieldset
      bg='white'
      title='班級'
      left={
        <LeftFieldsetButton>新增</LeftFieldsetButton>
      }
    />


## Group

相關組件


- Group: 为其子级提供上下文的包装器。
- Card:  单个卡片


    import {
      Group,
      Card
    } from "viviui"

用法

Card  的 component 的用法

Card 接收的參數


| 名字       | 描述                           |
| -------- | ---------------------------- |
| title    | 顯示在 Card 的標題                 |
| children | 它的子集數據                       |
| ...props | 能接受 chakra 的 Box 样式到 Card 里。 |


Card 的 props


| 名字           | 默認                                   | 描述              |
| ------------ | ------------------------------------ | --------------- |
| bg           | white                                | 背景為白色           |
| w            | {['45%', '30.5%', '22.5%', '22.6%']} | 寬隨著屏幕放大縮小而做改變   |
| p            | 20px                                 | 内邊距為20px        |
| borderRadius | 10px                                 | 邊框的弧度為10px      |
| d            | inline-block                         | 為行快標簽           |
| m            | {['2%', '1%', '1%', '1%']}           | 外邊框隨著屏幕放大縮小而做改變 |
| shadow       | 2px 2px 6px 0px #b9b9b9              | 邊框陰影            |



![](https://paper-attachments.dropbox.com/s_5DFED06E22537885E45F78FF28C7DF12C0D3C15059D03B250E0220F47FEC6BAA_1595932809089_image.png)

    <Card title="甲班" />

Group 的 Component 用法

Group 能接受到的值


| 名字       | 描述                           |
| -------- | ---------------------------- |
| children | 接收 CardDeck 的子集              |
| ...props | 能接受 chakra 的 Box 样式到 Card 里。 |

Group 的 props


| 名字       | 默認    | 描述           |
| -------- | ----- | ------------ |
| mx       | auto  | X軸上外邊距為 auto |
| px       | 8px   | X軸上内邊距為 8px  |
| width    | full  | 寬為滿屏         |
| maxWidth | 960px | 最大寬度為960px   |
| pb       | 16px  | 外邊居底部為16px   |

- 最大屏時


![](https://paper-attachments.dropbox.com/s_4D810874F0863F787ABE5EC187A79D50C774EE1EABF593725F3D079EBF3FDC6B_1596799208489_image.png)



- 小屏時


![](https://paper-attachments.dropbox.com/s_4D810874F0863F787ABE5EC187A79D50C774EE1EABF593725F3D079EBF3FDC6B_1596799225673_image.png)



- 最小屏時


![](https://paper-attachments.dropbox.com/s_4D810874F0863F787ABE5EC187A79D50C774EE1EABF593725F3D079EBF3FDC6B_1596799243600_image.png)



    const Group= () => {
      return (
        <Group>
          <Card title='甲班' />
          <Card title='乙班' />
          <Card title='丙班' />
          <Card title='丁班' />
          <Card title='超級班' />
        </Group>
      )
    }
    




## page

相关组件


- Page：为其子级提供上下文的包装器。
- HeaderPage： Page 頭部的 Heading 文字  。
- BackButton： 返回按鈕。
- DeleteButton： 刪除按鈕。
- DeleteRemind： 刪除提示及按鈕。
- LabelName： 標簽加名字，例：name：vivi。
- ManageMent： 有副標題的頁面。
- ColumnIconText： 輸入 icon 與文字，文字下有橫綫。
- NewButton： 一個新的按鈕。
- Row： 顯示簡單個人學校用戶的使用 component。
- SureButton： 確認按鈕。


    import{
      Page,
      HeaderPage,
      BackButton,
      DeleteIconButton,
      DeleteRemind,
      LabelName,
      ManageMent,
      ColumnIconText
      NewButton,
      Row,
      SureButton
    } from 'viviui'

用法

HeaderPage 的 component 用法

HeaderPage 接收的參數


| 名字    | 描述                                               |
| ----- | ------------------------------------------------ |
| props | 能接受 children 與 chakra 的 Hading 样式到 HeaderPage 里。 |


HeaderPage 的 props


| 名字        | 默認     | 描述   |
| --------- | ------ | ---- |
| textAlign | center | 字體居中 |

只需要直接傳入文字就行了

![](https://paper-attachments.dropbox.com/s_4D810874F0863F787ABE5EC187A79D50C774EE1EABF593725F3D079EBF3FDC6B_1596595320215_image.png)

    <HeaderPage>這是HeaderPage component</HeaderPage>

BackButton 的 component 用法

BackButton 接收的參數


| 名字    | 描述                                               |
| ----- | ------------------------------------------------ |
| props | 能接受 children 與 chakra 的 Button 样式到 BackButton 里。 |

BackButton 的 props


| 名字              | 默認                                                  | 描述                           |
| --------------- | --------------------------------------------------- | ---------------------------- |
| backgroundColor | #c2c2c2                                             | BackButton 的背景顔色             |
| minW            | {{ base: '100%', sm: '100%', md: '200px' }}         | BackButton 隨著屏幕的擴大縮小而變化      |
| mr              | 12px                                                | 右邊外邊距為 12px                  |
| mt              | 32px                                                | 上面外邊距為 32px                  |
| color           | white                                               | 字體顔色為白色                      |
| _hover          | {{backgroundColor: '#b8b8b8'}}                      | 鼠標移上去后顔色改變                   |
| _active         | {{boxShadow: '0 0 0 3px rgba(175, 175, 175, 0.6)'}} | 點下去那瞬間會對 BackButton 進行邊框陰影賦值 |


點擊前

![](https://paper-attachments.dropbox.com/s_4D810874F0863F787ABE5EC187A79D50C774EE1EABF593725F3D079EBF3FDC6B_1596597287106_image.png)


點擊下去不動的時候


![](https://paper-attachments.dropbox.com/s_4D810874F0863F787ABE5EC187A79D50C774EE1EABF593725F3D079EBF3FDC6B_1596597346765_image.png)



    <BackButton>返回</BackButton>

DeleteIconButton 的 component 用法

DeleteIconButton 接收的參數


| 名字    | 描述                                                         |
| ----- | ---------------------------------------------------------- |
| props | 能接受 children 與 chakra 的 IconButton 样式到 DeleteIconButton 里。 |

DeleteIconButton 的 props


| 名字           | 默認     | 描述                   |
| ------------ | ------ | -------------------- |
| icon         | delete | 默認為 delete 垃圾桶的 icon |
| variantColor | red    | 默認背景為紅色              |



![](https://paper-attachments.dropbox.com/s_4D810874F0863F787ABE5EC187A79D50C774EE1EABF593725F3D079EBF3FDC6B_1596597877459_image.png)

    <DeleteIconButton />

DeleteRemind 的 component 用法

DeleteRemind接收的參數


| 名字       | 描述                                   |
| -------- | ------------------------------------ |
| title    | DeleteRemind 的標題                     |
| content  | DeleteRemind 的文字説明                   |
| children | 刪除按鈕所放的 children 位置                  |
| …props   | 能接受 chakra 的 Box 样式到 DeleteRemind 里。 |


DeleteRemind 的 props


| 名字         | 默認                | 描述                  |
| ---------- | ----------------- | ------------------- |
| border     | 1px solid #FED7D7 | 邊框是實綫1px，顔色是#FED7D7 |
| background | #FFF5F5           | 背景顔色                |
| rounded    | 16px              | 邊框的弧度               |
| mt         | 80px              | 上方的外邊距為80px         |
| p          | 20px              | 内邊距為20px            |

網頁版


![](https://paper-attachments.dropbox.com/s_4D810874F0863F787ABE5EC187A79D50C774EE1EABF593725F3D079EBF3FDC6B_1596599569786_image.png)


手機版


![](https://paper-attachments.dropbox.com/s_4D810874F0863F787ABE5EC187A79D50C774EE1EABF593725F3D079EBF3FDC6B_1596599689222_image.png)



    <DeleteRemind
      title='標題'
      content='這裏是添加的正文提示。'
    >
      <SureButton variantColor='red'>刪除</SureButton>
    </DeleteRemind>

LabelName、Row 的 component 用法


-  LabelName 和 Row 的 component 需要一起用

LabelName 的 component 用法

LabelName 接收的參數


| 名字       | 描述                                |
| -------- | --------------------------------- |
| label    | LabelName 的標簽。                    |
| name     | LabelName 標簽后的名字                  |
| type     | LabelName 的類型                     |
| children | LabelName的子集                      |
| ...props | 能接受 chakra 的 Box 样式到 LabelName 里。 |


LabelName 的props


| 名字         | 默認                              | 描述              |
| ---------- | ------------------------------- | --------------- |
| display    | {{ base: 'block', sm: 'flex' }} | 隨著屏幕擴大縮小而改變排列類型 |
| lineHeight | 40px                            | 字體高度為40px       |


Row 的 component 用法

 Row 接收的參數


| 名字           | 描述                                |
| ------------ | --------------------------------- |
| right        | LabelName 的標簽。                    |
| left         | LabelName 標簽后的名字                  |
| name         | Row 的 ch                          |
| profilePhoto | 頭像的路徑                             |
| noDivider    | 是否需要底綫                            |
| children     | Row 的子集                           |
| ...props     | 能接受 chakra 的 Box 样式到 LabelName 里。 |


Row 的 props


| 名字       | 默認                                                         | 描述              |
| -------- | ---------------------------------------------------------- | --------------- |
| justify  | space-between                                              | 排列是兩邊有距離的排列     |
| width    | full                                                       | 寬的屏幕是滿屏         |
| maxWidth | 1280px                                                     | 最大寬度為 1280px    |
| mx       | auto                                                       | x軸上外邊距為 auto    |
| px       | {{ base: '1.25rem', sm: '1.25rem', md: '1.25rem', lg: 0 }} | 内邊距隨著屏幕的擴大縮小而變化 |


網頁版


![](https://paper-attachments.dropbox.com/s_4D810874F0863F787ABE5EC187A79D50C774EE1EABF593725F3D079EBF3FDC6B_1596610881733_image.png)


手機版


![](https://paper-attachments.dropbox.com/s_4D810874F0863F787ABE5EC187A79D50C774EE1EABF593725F3D079EBF3FDC6B_1596610860812_image.png)



    <Row
      profilePhoto={MyImage}
      name='vivi'
      left={
        <>
          <LabelName type='（学生）' name='vivi' label='姓名' />
        </>
      }
      right={
        <>
          <DeleteIconButton />
          <EditButton icon='edit' variantColor='blue' ml='5px' />
        </>
      }
    />
    


ColumnIconText  和 Management 的 component 用法

ColumnIconText 的 component 用法

ColumnIconText 接收的參數


| 名字            | 描述                                          |
| ------------- | ------------------------------------------- |
| icon          | ColumnIconText 的icon                        |
| title         | ColumnIconText 的文字                          |
| children      | ColumnIconText 的子集                          |
| listIconProps | 能接受 chakra 的 ListIcon 样式到 ColumnIconText 里。 |
| dividerProps  | 能接受 chakra 的 Box 样式到 ColumnIconText 里。      |
| …props        | 能接受 chakra 的 Box 样式到 ColumnIconText 里。      |


ColumnIconText 的 listIconProps


| 名字         | 默認                             | 描述            |
| ---------- | ------------------------------ | ------------- |
| fontSize   | {{ base: '23px', md: '26px' }} | 字體隨著屏幕擴大縮小而變化 |
| alignItems | center                         | 上下居中          |



ColumnIconText 的 listIconProps


| 名字       | 默認                             | 描述            |
| -------- | ------------------------------ | ------------- |
| fontSize | {{ base: '23px', md: '26px' }} | 字體隨著屏幕擴大縮小而變化 |


ColumnIconText 的 dividerProps


| 名字           | 默認                                                      | 描述              |
| ------------ | ------------------------------------------------------- | --------------- |
| w            | { base: 'calc(100% - 32px)', md: 'calc(100% - 35px)' }} | 隨著屏幕擴大縮小計算出它的寬度 |
| borderBottom | 1px solid #ededed                                       | 底綫為實綫 1px       |
| p            | 8px                                                     | 内邊距為8px         |


Management 的 component 用法

Management 接收的參數


| 名字               | 描述                                     |
| ---------------- | -------------------------------------- |
| subTitle         | Management 的 副標題                       |
| children         | Management 的子集                         |
| descriptionProps | 能接受 chakra 的 Heading 样式到 Management 里。 |
| ...props         | 能接受 chakra 的 Box 样式到 Management 里。     |


Management 的 descriptionProps


| 名字       | 默認                             | 描述            |
| -------- | ------------------------------ | ------------- |
| fontSize | {{ base: '15px', sm: '1rem' }} | 字體隨著屏幕擴大縮小而變化 |
| mt       | 40px                           | 外邊距的頭部        |
| mb       | 16px                           | 外邊距的地步        |



![](https://paper-attachments.dropbox.com/s_4D810874F0863F787ABE5EC187A79D50C774EE1EABF593725F3D079EBF3FDC6B_1596612659119_image.png)



    <Management
      px='5%'
      subTitle='你是管理员，可以拥有以下操作...'
    >
      <ColumnLine icon={FaSchool} color='#316bc3'>修改学校</ColumnLine>
      <ColumnLine icon={FaUserEdit} color='#316bc3'>学校用户</ColumnLine>
      <ColumnLine icon={GoTrashcan} color='#316bc3'>批量新增</ColumnLine>
      <ColumnLine icon={AiTwotoneSetting} color='#316bc3'>专长设定</ColumnLine>
      <ColumnLine icon={AiTwotoneSetting} color='#316bc3'>智能设定</ColumnLine>
    </Management>

NewButton 的 component 用法

NewButton 傳入的參數


| 名字    | 描述                                              |
| ----- | ----------------------------------------------- |
| props | 能接受 children 與 chakra 的 Button 样式到 NewButton 里。 |


NewButton 的 props


| 名字           | 默認    | 描述              |
| ------------ | ----- | --------------- |
| variantColor | blue  | NewButton 的背景顔色 |
| rounded      | 999px | 邊框的弧度           |
| mt           | 8px   | 頭部的外邊距          |



![](https://paper-attachments.dropbox.com/s_4D810874F0863F787ABE5EC187A79D50C774EE1EABF593725F3D079EBF3FDC6B_1596615511985_image.png)



    <NewButton w='100px'>新增</NewButton>

SureButton 的 component 用法

SureButton 傳入的參數


| 名字    | 描述                                              |
| ----- | ----------------------------------------------- |
| props | 能接受 children 與 chakra 的 Button 样式到 NewButton 里。 |


SureButton 的 props


| 名字           | 默認                                          | 描述               |
| ------------ | ------------------------------------------- | ---------------- |
| variantColor | blue                                        | SureButton 的背景顔色 |
| minW         | {{ base: '100%', sm: '100%', md: '200px' }} | 邊框的弧度            |
| mr           | 12px                                        | 右邊外邊距 12px       |
| mt           | 32px                                        | 頭部的外邊距 32px      |



![](https://paper-attachments.dropbox.com/s_4D810874F0863F787ABE5EC187A79D50C774EE1EABF593725F3D079EBF3FDC6B_1596616272876_image.png)



    <SureButton>確認</SureButton>

Page 的 component 用法

Page 能傳入的參數

| 名字        | 描述                                              |
| --------- | ----------------------------------------------- |
| backurl   | Page 板塊以上的數據                                    |
| nodivider | title 底綫默認為 true ，不需要這個 title 底綫時直接傳入 nodivider |
| children  | Page的子集                                         |
| ...props  | 传入 chakra 能接受的 Box 样式到 Page 的最外层 Box 里          |



1. 

网页版


![](https://paper-attachments.dropbox.com/s_4D810874F0863F787ABE5EC187A79D50C774EE1EABF593725F3D079EBF3FDC6B_1596622916422_image.png)


手机版


![](https://paper-attachments.dropbox.com/s_4D810874F0863F787ABE5EC187A79D50C774EE1EABF593725F3D079EBF3FDC6B_1596622840658_image.png)



    const editDashboard = () => {
      return (
        <Page>
          <HeaderPage size='lg' as='h2' pt={4}>編輯 Dashboard</HeaderPage>
          <HeaderPage
            fontSize={{ base: '17px', md: '25px' }}
            mt={5}
          >
            聖若瑟教區中學第六校
          </HeaderPage>
          <Box as='article' px={{ base: 8, sm: 8, md: 16 }} pb={16}>
            <Box
              d='flex'
              justifyContent='space-between'
              flexDirection={{ base: 'column-reverse', md: 'initial' }}
            >
              <BackButton>返回</BackButton>
              <SureButton>確認</SureButton>
            </Box>
            <DeleteRemind
              title='刪除 Dashboard'
              content='删除 Dashborad 後后，將會清空該 Dashborad 的所有資料，該操作不能還原，請謹慎操作。'
              >
              <SureButton variantColor='red'>刪除</SureButton>
            </DeleteRemind>
          </Box>
        </Page>
      )
    }



2. 

网页版


![](https://paper-attachments.dropbox.com/s_4D810874F0863F787ABE5EC187A79D50C774EE1EABF593725F3D079EBF3FDC6B_1596624112427_image.png)


手机版


![](https://paper-attachments.dropbox.com/s_4D810874F0863F787ABE5EC187A79D50C774EE1EABF593725F3D079EBF3FDC6B_1596624144237_image.png)



    <Page
      title={
        <HeaderPage size='lg' as='h2' pt={4}>編輯學校</HeaderPage>
      }
    >
      <Box as='article' px={{ base: 8, sm: 8, md: 16 }} pb={16}>
        <Box
          top='0px'
          left='0px'
          bottom='0px'
          right='0px'
          my={5}
        >
          <Row
            profilePhoto={MyImage}
            name='vivi'
            left={
              <>
                <LabelName type='（学生）' name='vivi' label='姓名' />
                <LabelName name='343546' label='學號' />
                <LabelName name='vivi' label='姓名' />
              </>
            }
            right={
              <>
                <DeleteIconButton />
                <EditButton icon='edit' variantColor='blue' />
              </>
            }
          />
        </Box>
      </Box>
    </Page>


3. 

网页版


![](https://paper-attachments.dropbox.com/s_4D810874F0863F787ABE5EC187A79D50C774EE1EABF593725F3D079EBF3FDC6B_1596624331171_image.png)


手机版


![](https://paper-attachments.dropbox.com/s_4D810874F0863F787ABE5EC187A79D50C774EE1EABF593725F3D079EBF3FDC6B_1596624304967_image.png)



    <Page
      title={
        <HeaderPage>
          管理员
        </HeaderPage>
      }
    >
      <Management
        px='5%'
        subTitle='你是管理员，可以拥有以下操作...'
      >
        <ColumnLine icon={FaSchool} color='#316bc3'>修改学校</ColumnLine>
        <ColumnLine icon={FaUserEdit} color='#316bc3'>学校用户</ColumnLine>
        <ColumnLine icon={GoTrashcan} color='#316bc3'>批量新增</ColumnLine>
        <ColumnLine icon={AiTwotoneSetting} color='#316bc3'>专长设定</ColumnLine>
        <ColumnLine icon={AiTwotoneSetting} color='#316bc3'>智能设定</ColumnLine>
      </Management>
    </Page>
  
  ## Table

  相关组件


- Table：为其子级提供上下文的包装器。
- TableHead： Table 的他头部
- TableBody： Table 的正文内容。
- TableCell： 选单的头部文字。
- TableRow： 选单的线。


    import{
      Table,
      TableHead,
      TableBody,
      TableCell,
      TableRow
    } from 'viviui'

用法


- Table 、 TableHead 、TableBody、TableCell 和 TableRow 是同个使用的。


- Table

Table 能传入的值


| 名字    | 描述                             |
| ----- | ------------------------------ |
| props | 能接收 children 和 chakra 的 Box 样式 |


Table 的 props


| 名字            | 默认      | 描述         |
| ------------- | ------- | ---------- |
| w             | 99%     | 宽为父级容器的99% |
| m             | auto    | 外边距为auto   |
| letterSpacing | 0.05rem | 文字之间的距离    |



- TableHead

TableHead 能传入的值


| 名字       | 描述                             |
| -------- | ------------------------------ |
| children | TableHead 的子集                  |
| props    | 能接收 children 和 chakra 的 Box 样式 |



- TableBody

TableBody 能传入的值


| 名字       | 描述                  |
| -------- | ------------------- |
| children | TableBody 的子集       |
| …props   | 能接收 chakra 的 Box 样式 |



- TableRow

TableRow 能传入的值


| 名字       | 描述                  |
| -------- | ------------------- |
| children | TableRow 的子集        |
| …props   | 能接收 chakra 的 Box 样式 |


TableRow 的 props


| 名字 | 默认   | 描述     |
| -- | ---- | ------ |
| h  | 40px | 高为40px |


网页版


![](https://paper-attachments.dropbox.com/s_8EFB53B459DFBDB9C235502D4BECA487A512B429058057BF480D44183B2255BB_1596688400741_image.png)


手机版


![](https://paper-attachments.dropbox.com/s_8EFB53B459DFBDB9C235502D4BECA487A512B429058057BF480D44183B2255BB_1596688435240_image.png)



    const table = () => {
      const data = [
        {
          fieldName: '姓名',
          describe: '必填'
        },
        {
          fieldName: '英文姓名',
          describe: '選填'
        },
        {
          fieldName: '性別',
          describe: '選填可'
        },
        {
          fieldName: '學生證號碼',
          describe: '選填'
        },
        {
          fieldName: '身份證號碼',
          describe: '選填可留空'
        },
        {
          fieldName: '教青',
          describe: '選填可留空'
        },
        {
          fieldName: '拍卡卡號',
          describe: '選填可留空'
        },
        {
          fieldName: '電郵信箱',
          describe: '必填'
        },
        {
          fieldName: '學生',
          describe: '學生'
        },
        {
          fieldName: '老師',
          describe: '學生'
        },
        {
          fieldName: '學校主管',
          describe: '學生'
        },
        {
          fieldName: '學校管理員',
          describe: '學生'
        }
      ]
      return (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell w='50px'>序號</TableCell>
              <TableCell>名稱</TableCell>
              <TableCell>值</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item, index) => {
              return (
                <>
                  <TableRow>
    
                    <TableCell textAlign='center'>
                      {index + 1}
                    </TableCell>
    
                    <TableCell px={{ base: '1', sm: '1', md: '4' }}>
                      {item.fieldName}
                    </TableCell>
    
                    <TableCell px={{ base: '1', sm: '1', md: '4' }} py={3}>
                      {item.describe}
                    </TableCell>
    
                  </TableRow>
                </>
              )
            })}
          </TableBody>
        </Table>
      )
    }

## FullScreenView
相关组件


- FullScreenView：为其子级提供上下文的包装器。
- RedButton：红色并且四个角都是弧度为最大的弧度。
- BlueButton：菜单列表的触发器。
- ButtonGrid：选单的头部文字。
- LargeTitle：选单的线。


    import{
      FullScreenView,
      RedButton,
      BlueButton,
      BUttonGrid,
      LargeTitle
    } from 'viviui'

用法

RedButton 的 component 用法

RedButton 能传入的参数


| 名称        | 描述                                    |
| --------- | ------------------------------------- |
| leftIcon  | 接收左边的自定义 icon                         |
| rightIcon | 接收右边的自定义icon                          |
| children  | Button的子集                             |
| ...props  | 能接收到 chakra  的 Button 样式到 RedButton 里 |


RedButton 里的 props


| 名称           | 默认                             | 描述                       |
| ------------ | ------------------------------ | ------------------------ |
| size         | lg                             | chakra 的 Button 宽度       |
| bg           | #E53E3E                        | 背景颜色为红色                  |
| w            | {{ base: '98%', sm: '340px' }} | 宽度当最小屏时为98%              |
| variant      | solid                          | variant 是 Button 显示颜色的类型 |
| borderRadius | 9999px                         | 弧度为 9999px               |
| color        | #fff                           | 字体颜色为#fff                |
| _hover       | background: ‘#C53030’          | 鼠标移上去，背景颜色是#C53030       |
| _active      | background: ‘#9B2C2C'          | 鼠标点击的那瞬间背景颜色是#9B2C2C     |



- 按钮左边放icon


![](https://paper-attachments.dropbox.com/s_5C95C1431E8EE271575B06E0F01DCCD326973A3B62300F7E5C22D65DB3E79990_1597044017278_image.png)



    <RedButton
      leftIcon={
        <AiFillGoogleSquare
          size='24px'
        />
      }
    >
      这是一个红色按钮
    </RedButton>


- 按钮右边放icon


![](https://paper-attachments.dropbox.com/s_5C95C1431E8EE271575B06E0F01DCCD326973A3B62300F7E5C22D65DB3E79990_1597044001131_image.png)



    <RedButton
      rightIcon={
        <AiFillGoogleSquare
          size='24px'
        />
      }
    >
      这是一个红色按钮
    </RedButton>

 BlueButton 的 component 用法

BlueButton 能传入的参数


| 名称        | 描述                                    |
| --------- | ------------------------------------- |
| leftIcon  | 接收左边的自定义 icon                         |
| rightIcon | 接收右边的自定义icon                          |
| children  | Button的子集                             |
| ...props  | 能接收到 chakra  的 Button 样式到 RedButton 里 |


BlueButton 里的 props


| 名称           | 默认                             | 描述                       |
| ------------ | ------------------------------ | ------------------------ |
| size         | lg                             | chakra 的 Button 宽度       |
| w            | {{ base: '98%', sm: '340px' }} | 宽度当最小屏时为98%              |
| variantColor | blue                           | variant 是 Button 显示颜色的类型 |
| borderRadius | 9999px                         | 弧度为 9999px               |



- 按钮左边放icon


![](https://paper-attachments.dropbox.com/s_5C95C1431E8EE271575B06E0F01DCCD326973A3B62300F7E5C22D65DB3E79990_1597045684220_image.png)



    <BlueButton leftIcon={<AiFillGoogleSquare size='24px' />}>
      这是一个蓝色按钮
    </BlueButton>


- 按钮右边放icon


![](https://paper-attachments.dropbox.com/s_5C95C1431E8EE271575B06E0F01DCCD326973A3B62300F7E5C22D65DB3E79990_1597045714729_image.png)



    <BlueButton rightIcon={<AiFillGoogleSquare size='24px' />}>
      这是一个蓝色按钮
    </BlueButton>


ButtonGrid 的 component 用法


- 包裹着按钮的一个组件

ButtonGrid 能传入的参数


| 名称    | 描述                                                 |
| ----- | -------------------------------------------------- |
| props | 能接收 children 和 chakra 的  SimpleGrid 样式到 ButtonGrid |


ButtonGrid 里的 props


| 名称      | 默认                              | 描述           |
| ------- | ------------------------------- | ------------ |
| columns | 1                               | 一行只显示一个      |
| spacing | 16px                            | 两个子集之间的距离    |
| py      | 16px                            | 在Y轴的外边距宽度    |
| w       | {{ base: '100%', sm: '340px' }} | 宽度在最小屏时为100% |



![](https://paper-attachments.dropbox.com/s_5C95C1431E8EE271575B06E0F01DCCD326973A3B62300F7E5C22D65DB3E79990_1597046543639_image.png)



    <ButtonGrid>
      <RedButton leftIcon={<AiFillGoogleSquare size='24px' />}>
        这是一个红色按钮
      </RedButton>
      <RedButton rightIcon={<AiFillGoogleSquare size='24px' />}>
        这是一个红色按钮
      </RedButton>
      <BlueButton leftIcon={<AiFillGoogleSquare size='24px' />}>
        这是一个蓝色按钮
      </BlueButton>
      <BlueButton rightIcon={<AiFillGoogleSquare size='24px' />}>
        这是一个蓝色按钮
      </BlueButton>
    </ButtonGrid>


LargeTitle 的 component 用法

LargeTitle 能传入的参数


| 名称    | 说明                                 |
| ----- | ---------------------------------- |
| props | 能接收 children 和 chakra 的 Heading 样式 |


LargeTitle 里的 props


| 名称        | 默认     | 描述         |
| --------- | ------ | ---------- |
| size      | 2xl    | 字体大小       |
| w         | 100%   | 宽度为100%    |
| mb        | 16px   | 底部内边距为16px |
| textAlign | center | 字体居中       |



![](https://paper-attachments.dropbox.com/s_5C95C1431E8EE271575B06E0F01DCCD326973A3B62300F7E5C22D65DB3E79990_1597047773023_image.png)



    <LargeTitle>这是一个标题</LargeTitle>


FullScreenView 的 component 用法

FullScreenView 能传入的参数


| 名称        | 描述                                  |
| --------- | ----------------------------------- |
| closePath | 点击右上角关闭按钮后要返回的路径                    |
| children  | FullScreenView 的子集                  |
| ...props  | 接收 chakra的 Box 样式到 FullScreenView 里 |


FullScreenView 的 props


| 名称             | 默认         | 描述                   |
| -------------- | ---------- | -------------------- |
| pos            | fixed      | 固定定位                 |
| top            | 0          | 离上方0                 |
| left           | 0          | 离左边0                 |
| right          | 0          | 离右边0                 |
| bottom         | 0          | 离下边0                 |
| w              | 100%       | 宽 100%               |
| h              | 100%       | 高100%                |
| d              | flex       | display 为 flex       |
| alignItems     | center     | 字体垂直居中               |
| justifyContent | flex-start | 内容从 start 开始排列       |
| flexDirection  | column     | flexDirection 从上到下排列 |
| zIndex         | 4000       | zIndex为4000          |
| overflowY      | auto       | 滚动条为auto             |



![](https://paper-attachments.dropbox.com/s_5C95C1431E8EE271575B06E0F01DCCD326973A3B62300F7E5C22D65DB3E79990_1597048614920_image.png)



    <FullScreenView closePath='/'>
      <LargeTitle>登入</LargeTitle>
      <ButtonGrid>
        <RedButton leftIcon={<AiFillGoogleSquare size='24px' />}>
          使用google登入
        </RedButton>
        <RedButton leftIcon={<AiFillGoogleSquare size='24px' />}>
          使用google登入
        </RedButton>
        <RedButton leftIcon={<AiFillGoogleSquare size='24px' />}>
          使用google登入
        </RedButton>
        <RedButton leftIcon={<AiFillGoogleSquare size='24px' />}>
          使用google登入
        </RedButton>
      </ButtonGrid>
    </FullScreenView>



## Crumb

相关组件


- Crumb
- CrumbLink：Breadcrumb的 link 元素。


    import{
      Crumb,
      CrumbLink
    } from 'viviui'


- Crumb 和 CrumbLink 需要一起使用

Crumb 能传入的参数


| 名称       | 描述                                     |
| -------- | -------------------------------------- |
| children | Crumb 的儿子                             |
| ...props | 接受chakra 的 Breadcrumb 样式到 Crumb 里 |


Crumb 的 Props


| 名称        | 默认                            | 描述        |
| --------- | ----------------------------- | --------- |
| spacing   | 8px                           | 子集之间的距离   |
| separator | <Icon name='chevron-right' /> | 子集之间的icon |


CrumbLink 能传入的参数


| 名称    | 描述                                                 |
| ----- | -------------------------------------------------- |
| props | 能接受 children chakra 的 BreadcrumbLink 到 CrumbLink 里 |


CrumbLink 的 Props


| 名称         | 默认      | 描述   |
| ---------- | ------- | ---- |
| color      | #1b6ac9 | 字体颜色 |
| fontWeight | bold    | 字体加粗 |



![](https://paper-attachments.dropbox.com/s_5C95C1431E8EE271575B06E0F01DCCD326973A3B62300F7E5C22D65DB3E79990_1597056325075_image.png)



    <Crumb>
        <CrumbLink>vivi</CrumbLink>
        <CrumbLink>vivi</CrumbLink>
        <CrumbLink>vivi</CrumbLink>
    </Crumb>
