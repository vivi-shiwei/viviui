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



## CardDeck 

相關組件


- CardDeck: 为其子级提供上下文的包装器。
- Fieldset:   頭部數據及左邊數據
- RoundedButton:   标题左侧的按钮
- Card:  单个卡片


    import {
      CardDeck,
      Fieldset,
      RoundedButton,
      Card
    } from "viviui"

用法

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
        <RoundedButton>新增</RoundedButton>
      }
    />

RoundedButtton 的 Component 用法

RoundedButton 傳入的參數


| 名字    | 描述                                                  |
| ----- | --------------------------------------------------- |
| props | 能接受 children 及 chakra 的 Button 样式到 RoundedButton 里。 |


RoundedButton 的 props 


| 名字          | 默認                              | 描述             |
| ----------- | ------------------------------- | -------------- |
| borderWidth | 1px                             | 變框綫的寬度         |
| rounded     | 999px                           | 四角為最大的弧度       |
| minW        | {{ base: '80px', sm: '110px' }} | 最小寬度隨屏幕而變      |
| position    | absolute                        | 絕對定位           |
| top         | 0                               | 離上層固定定位的top為0  |
| left        | 0                               | 離上層固定定位的left為0 |



![](https://paper-attachments.dropbox.com/s_5DFED06E22537885E45F78FF28C7DF12C0D3C15059D03B250E0220F47FEC6BAA_1595932631027_image.png)



    <RoundedButton>新增</RoundedButton>


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

CardDeck 的 Component 用法

CardDeck 能接受到的值


| 名字       | 描述                           |
| -------- | ---------------------------- |
| children | 接收 CardDeck 的子集              |
| ...props | 能接受 chakra 的 Box 样式到 Card 里。 |

CardDeck 的 props


| 名字       | 默認    | 描述           |
| -------- | ----- | ------------ |
| mx       | auto  | X軸上外邊距為 auto |
| px       | 8px   | X軸上内邊距為 8px  |
| width    | full  | 寬為滿屏         |
| maxWidth | 960px | 最大寬度為960px   |
| pb       | 16px  | 外邊居底部為16px   |

- 最大屏時
![](https://paper-attachments.dropbox.com/s_4D810874F0863F787ABE5EC187A79D50C774EE1EABF593725F3D079EBF3FDC6B_1596450985218_image.png)

- 小屏時


![](https://paper-attachments.dropbox.com/s_4D810874F0863F787ABE5EC187A79D50C774EE1EABF593725F3D079EBF3FDC6B_1596451887402_image.png)



- 最小屏時


![](https://paper-attachments.dropbox.com/s_4D810874F0863F787ABE5EC187A79D50C774EE1EABF593725F3D079EBF3FDC6B_1596451936914_image.png)



    const CardDeck = () => {
      return (
        <CardDeck>
          <Fieldset
            title='班級'
            bg='white'
            left={<RoundedButton>新增</RoundedButton>}
          />
          <Card title='甲班' />
          <Card title='乙班' />
          <Card title='丙班' />
          <Card title='丁班' />
          <Card title='超級班' />
        </CardDeck>
      )
    }
    


- 没有新增按钮


![](https://paper-attachments.dropbox.com/s_4D810874F0863F787ABE5EC187A79D50C774EE1EABF593725F3D079EBF3FDC6B_1596452380435_image.png)



- 小屏時


![](https://paper-attachments.dropbox.com/s_4D810874F0863F787ABE5EC187A79D50C774EE1EABF593725F3D079EBF3FDC6B_1596452353183_image.png)



- 最小屏時


![](https://paper-attachments.dropbox.com/s_4D810874F0863F787ABE5EC187A79D50C774EE1EABF593725F3D079EBF3FDC6B_1596452306563_image.png)



    const CardDeck = () => {
      return (
        <CardDeck>
          <Fieldset
            title='班級'
            bg='white'
          />
          <Card title='乙班' />
          <Card title='乙班' />
          <Card title='甲班' />
          <Card title='乙班' />
          <Card title='丙班' />
          <Card title='丁班' />
          <Card title='超級班' />
        </CardDeck>
      )
    }