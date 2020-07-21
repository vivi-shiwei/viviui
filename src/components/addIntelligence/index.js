import React from 'react'
import {
  Input,
  Flex,
  Grid,
  Button,
  PseudoBox,
  useToast,
  FormControl,
  FormErrorMessage
} from '@chakra-ui/core'
import { Formik, Field, Form } from 'formik'

const AddIntelligence = ({ submitButton, cancelButton, ...props }) => {
  const toast = useToast()
  const validateName = (value) => {
    let error
    if (!value) {
      error = '内容不能为空'
    } else if (value.length < 3) {
      error = '长度不能少于2个'
    }
    return error
  }
  return (
    <PseudoBox
      _hover={{ backgroundColor: '#ceedff' }} cursor='pointer' p={{ base: '20px', sm: '20px', md: '10px' }}
    >
      <Formik
        initialValues={{ name1: '', name2: '' }}
        onSubmit={(values, actions) => {
          toast({
            position: 'top',
            title: 'Account created.',
            description: "We've created your account for you.",
            status: 'success',
            duration: 9000,
            isClosable: true
          })
          console.log(values.name1, values.name2)
          actions.setSubmitting(false)
        }}
      >
        {({ isSubmitting }) => (
          <Form p='5px 0'>
            <Flex direction={{ base: 'column', md: 'row' }} alignItems='center' justifyContent={{ md: 'space-between', base: 'flex-start' }}>
              <Grid width={{ base: '100%', md: '60%' }} templateColumns='repeat(1, 1fr)' gap={4}>
                <Field name='name1' validate={validateName}>
                  {({ field, form: { errors, touched } }) => (
                    <FormControl isInvalid={errors.name1 && touched.name1}>
                      <Input placeholder='新增智能名称' {...field} />
                      <FormErrorMessage>{errors.name1}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name='name2' validate={validateName}>
                  {({ field, form: { errors, touched } }) => (
                    <FormControl isInvalid={errors.name2 && touched.name2}>
                      <Input placeholder='新增智能英文名称' {...field} />
                      <FormErrorMessage>{errors.name2}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
              </Grid>
              <Grid width={{ base: '100%', md: '30%' }} mt={{ base: '20px', md: '0' }} templateColumns='repeat(2, 1fr)' gap={8}>
                <Button isLoading={props.isSubmitting} variantColor='green' type='submit'> {submitButton || '送出资料'} </Button>
                <Button onClick={() => { props.onClose() }} variantColor='green'>{cancelButton || '取消'} </Button>
              </Grid>
            </Flex>
          </Form>

        )}
      </Formik>
    </PseudoBox>
  )
}

export default AddIntelligence
