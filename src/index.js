// import {
//   Box,
//   theme,
//   Button,
//   ThemeProvider,
//   Accordion,
//   AccordionItem,
//   AccordionHeader,
//   AccordionPanel,
//   AccordionIcon,
//   Alert,
//   AlertIcon,
//   AlertTitle,
//   AlertDescription,
//   AlertDialog,
//   AlertDialogBody,
//   AlertDialogFooter,
//   AlertDialogHeader,
//   AlertDialogContent,
//   AlertDialogOverlay,
//   AspectRatioBox,
//   Avatar,
//   AvatarBadge,
//   Badge,
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbSeparator,
//   Checkbox,
//   CheckboxGroup,
//   CircularProgress,
//   CircularProgressLabel,
//   CloseButton,
//   Code,
//   Collapse,
//   ControlBox,
//   VisuallyHidden,
//   Divider,
//   Drawer,
//   DrawerBody,
//   DrawerFooter,
//   DrawerHeader,
//   DrawerOverlay,
//   DrawerContent,
//   DrawerCloseButton,
//   Editable,
//   EditableInput,
//   EditablePreview,
//   Flex,
//   FormControl,
//   FormLabel,
//   FormErrorMessage,
//   FormHelperText,
//   Grid,
//   Heading,
//   Icon,
//   IconButton,
//   Image,
//   Input,
//   Link,
//   List,
//   ListItem,
//   ListIcon,
//   Menu,
//   MenuButton,
//   MenuList,
//   MenuItem,
//   MenuGroup,
//   MenuDivider,
//   MenuOptionGroup,
//   MenuItemOption,
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalFooter,
//   ModalBody,
//   ModalCloseButton,
//   NumberInput,
//   NumberInputField,
//   NumberInputStepper,
//   NumberIncrementStepper,
//   NumberDecrementStepper,
//   Popover,
//   PopoverTrigger,
//   PopoverContent,
//   PopoverHeader,
//   PopoverBody,
//   PopoverFooter,
//   PopoverArrow,
//   PopoverCloseButton,
//   Progress,
//   PseudoBox,
//   Radio,
//   RadioGroup,
//   SimpleGrid,
//   Select,
//   Skeleton,
//   Slider,
//   SliderTrack,
//   SliderFilledTrack,
//   SliderThumb,
//   Spinner,
//   Stat,
//   StatLabel,
//   StatNumber,
//   StatHelpText,
//   StatArrow,
//   StatGroup,
//   Stack,
//   Switch,
//   Tabs,
//   TabList,
//   TabPanels,
//   Tab,
//   TabPanel,
//   Tag,
//   TagIcon,
//   TagLabel,
//   TagCloseButton,
//   Text,
//   Textarea,
//   useToast,
//   Tooltip,
//   useClipboard,
//   useDisclosure,
//   useTheme,
//   useColorMode,
//   CSSReset
// } from '@chakra-ui/core'

// import NextLink from 'next/link'

// export {
//   Box,
//   theme,
//   Button,
//   ThemeProvider,
//   Accordion,
//   AccordionItem,
//   AccordionHeader,
//   AccordionPanel,
//   AccordionIcon,
//   Alert,
//   AlertIcon,
//   AlertTitle,
//   AlertDescription,
//   AlertDialog,
//   AlertDialogBody,
//   AlertDialogFooter,
//   AlertDialogHeader,
//   AlertDialogContent,
//   AlertDialogOverlay,
//   AspectRatioBox,
//   Avatar,
//   AvatarBadge,
//   Badge,
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbSeparator,
//   Checkbox,
//   CheckboxGroup,
//   CircularProgress,
//   CircularProgressLabel,
//   CloseButton,
//   Code,
//   Collapse,
//   ControlBox,
//   VisuallyHidden,
//   Divider,
//   Drawer,
//   DrawerBody,
//   DrawerFooter,
//   DrawerHeader,
//   DrawerOverlay,
//   DrawerContent,
//   DrawerCloseButton,
//   Editable,
//   EditableInput,
//   EditablePreview,
//   Flex,
//   FormControl,
//   FormLabel,
//   FormErrorMessage,
//   FormHelperText,
//   Grid,
//   Heading,
//   Icon,
//   IconButton,
//   Image,
//   Input,
//   Link,
//   List,
//   ListItem,
//   ListIcon,
//   Menu,
//   MenuButton,
//   MenuList,
//   MenuItem,
//   MenuGroup,
//   MenuDivider,
//   MenuOptionGroup,
//   MenuItemOption,
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalFooter,
//   ModalBody,
//   ModalCloseButton,
//   NumberInput,
//   NumberInputField,
//   NumberInputStepper,
//   NumberIncrementStepper,
//   NumberDecrementStepper,
//   Popover,
//   PopoverTrigger,
//   PopoverContent,
//   PopoverHeader,
//   PopoverBody,
//   PopoverFooter,
//   PopoverArrow,
//   PopoverCloseButton,
//   Progress,
//   PseudoBox,
//   Radio,
//   RadioGroup,
//   SimpleGrid,
//   Select,
//   Skeleton,
//   Slider,
//   SliderTrack,
//   SliderFilledTrack,
//   SliderThumb,
//   Spinner,
//   Stat,
//   StatLabel,
//   StatNumber,
//   StatHelpText,
//   StatArrow,
//   StatGroup,
//   Stack,
//   Switch,
//   Tabs,
//   TabList,
//   TabPanels,
//   Tab,
//   TabPanel,
//   Tag,
//   TagIcon,
//   TagLabel,
//   TagCloseButton,
//   Text,
//   Textarea,
//   useToast,
//   Tooltip,
//   useClipboard,
//   useDisclosure,
//   useTheme,
//   useColorMode,
//   CSSReset
// }

export * from '@chakra-ui/core'

// Header
export { default as Header } from './components/header'
export { default as HeaderButton } from './components/header/headerButton'
export { default as HeaderMenuButton } from './components/header/headerMenuButton'
export { default as HeaderLogo } from './components/header/headerLogo'
export { default as HeaderLeft } from './components/header/headerLeft'
export { default as HeaderCenter } from './components/header/headerCenter'
export { default as HeaderRight } from './components/header/headerRight'
export { default as HeaderMobileNav } from './components/header/headerMobileNav'
export { default as DrawerItemHeader } from './components/header/drawerItemHeader'
export { default as DrawerItemDivider } from './components/header/drawerItemDivider'
export { default as DrawerItemButton } from './components/header/drawerItemButton'

// Hero
export { default as Hero } from './components/hero'

// FeatrueGrid
export { default as FeatrueGrid } from './components/featureGrid'
export { default as Featrure } from './components/featureGrid/feature'

// Footer
export { default as Footer } from './components/footer'

// Group
export { default as CardGroup } from './components/cardGroup'
export { default as Card } from './components/cardGroup/card'

// Fieldset
export { default as Fieldset } from './components/Fieldset'
export { default as LeftFieldset } from './components/Fieldset/leftFieldset'
export { default as RightFieldset } from './components/Fieldset/rightFieldset'
export { default as FieldsetHeader } from './components/Fieldset/fieldsetHeader'

// CenterSelector
export { default as ModalSelector } from './components/modalSelector'
export { default as ModalSelectorOption } from './components/modalSelector/modalSelectorOption'

// Modal
export { default as NewModal } from './components/newModal'
export { default as ModalWithContent } from './components/newModal/modalContent'
export { default as ModalWithHeader } from './components/newModal/modalWithHeader'

// export { default as BlueButton } from './components/blueButton'
export { default as DeleteIconButton } from './components/page/deleteButton'

// editShow

export { default as EditShow } from './components/editShow'
export { default as EditTable } from './components/editShow/editTable'
export { default as DeleteIcon } from './components/editShow/deleteIcon'
export { default as ConfirmButton } from './components/editShow/confirmButton'
export { default as CancelButton } from './components/editShow/cancelButton'

// page

export { default as Page } from './components/page'
export { default as ColumnIconText } from './components/page/columnIconText'
export { default as BackButton } from './components/page/backButton'
export { default as DeleteButton } from './components/page/deleteButton'
export { default as DeleteRemind } from './components/page/deleteRemind'
export { default as PageHeader } from './components/page/pageTitle'
export { default as LabelName } from './components/page/labelName'
export { default as ManageMent } from './components/page/manageMent'
export { default as NewButton } from './components/page/newButton'
export { default as Row } from './components/page/row'
export { default as SureButton } from './components/page/sureButton'

// Table
export { default as Table } from './components/table'
export { default as TableBody } from './components/table/tableBody'
export { default as TableCell } from './components/table/tableCell'
export { default as TableHead } from './components/table/tableHead'
export { default as TableRow } from './components/table/tableRow'

// 显示很多头像的component
export { default as AvatarTooltipGroup } from './components/avatarTooltipGroup'
export { default as Avatars } from './components/avatarTooltipGroup/avatars'
export { default as Tooltips } from './components/avatarTooltipGroup/toolTips'

// 屏幕最中间的登录页面，FullScreenView
export { default as FullScreenView } from './components/fullScreenView'
export { default as RedButton } from './components/fullScreenView/redButton'
export { default as BlueButton } from './components/fullScreenView/blueButton'
export { default as ButtonGrid } from './components/fullScreenView/buttonGrid'
export { default as LargeTitle } from './components/fullScreenView/largeTitle'

// postCard
export { default as PostCard } from './components/postCard'
export { default as PostHeader } from './components/postCard/postHeader'
export { default as Postparticipast } from './components/postCard/postParticipast'
export { default as PostTitle } from './components/postCard/postTitle'
export { default as PostBody } from './components/postCard/postBody'
export { default as PostPhtos } from './components/postCard/postPhtos'
export { default as PostEmbed } from './components/postCard/postEmbed'
// export { default as Pictures } from './components/postCard/pictures'
// export { default as PictureBox } from './components/postCard/pictureBox'

// phone
export { default as SingleAnnouncement } from './components/singleAnnouncement'
export { default as StatusButton } from './components/singleAnnouncement/statusButton'
export { default as AnnouncementHeader } from './components/singleAnnouncement/announcementHeader'

// media
export { default as Media } from './components/media'
export { default as MediaLeft } from './components/media/mediaLeft'
export { default as MediaRight } from './components/media/mediaRight'
export { default as MediaCenter } from './components/media/mediaContent'
