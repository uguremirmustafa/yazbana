import { array, boolean, mixed, email, object, string } from 'yup';
import { Formik, Field, Form } from 'formik';
import { useState } from 'react';
import {
  FormControl,
  Button,
  FormLabel,
  Box,
  Input,
  FormErrorMessage,
  Textarea,
  Grid,
  GridItem,
} from '@chakra-ui/react';

const initialValues = {
  name: '',
  email: '',
  comment: '',
};

function CommentForm({ postId }) {
  const [message, setMessage] = useState('');
  const handleSubmit = async (values) => {
    const res = await fetch('/api/createComment', {
      method: 'POST',
      body: JSON.stringify({ values, postId }),
    });
    const data = await res.json();

    setMessage(data?.message);
  };
  return (
    <>
      <Formik
        validationSchema={object({
          name: string()
            .required('Lütfen adınızı giriniz')
            .min(3, 'Isminiz güzelmiş keşke biraz daha uzun olsa')
            .max(50),
          email: string()
            .email('E-posta adresinizi doğru giriniz')
            .required('Lütfen e-posta adresinizi giriniz'),
          comment: string()
            .required('Lütfen iletmek istediğiniz yorumu yazınız')
            .min(1, 'yorumunuz çok kısa')
            .max(300),
        })}
        initialValues={initialValues}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          try {
            const res = await fetch('/api/createComment', {
              method: 'POST',
              body: JSON.stringify({ values, postId }),
            });
            const data = await res.json();
            setMessage(data?.message);
            setSubmitting(false);
            resetForm();
          } catch (error) {
            alert(error);
          }
        }}
      >
        {({ isSubmitting }) => (
          <Box w="100%" mx="auto" rounded="xl">
            <Form noValidate>
              <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={2}>
                <GridItem>
                  <Field name="name">
                    {({ field, form }) => (
                      <FormControl isInvalid={form.errors.name && form.touched.name} mb="4">
                        <FormLabel htmlFor="name">Ad</FormLabel>
                        <Input
                          {...field}
                          id="name"
                          placeholder="İsminiz"
                          border="2px"
                          borderRadius="full"
                          borderColor="gray.400"
                          color="gray.800"
                        />
                        <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                </GridItem>
                <GridItem>
                  <Field name="email">
                    {({ field, form }) => (
                      <FormControl isInvalid={form.errors.email && form.touched.email} mb="4">
                        <FormLabel htmlFor="email">E-posta</FormLabel>
                        <Input
                          {...field}
                          id="email"
                          placeholder="E-posta adresiniz"
                          border="2px"
                          borderRadius="full"
                          borderColor="gray.400"
                          color="gray.800"
                        />
                        <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                </GridItem>
                <GridItem colSpan={{ md: '2' }}>
                  <Field name="comment">
                    {({ field, form }) => (
                      <FormControl isInvalid={form.errors.comment && form.touched.comment}>
                        <FormLabel htmlFor="comment">Mesajınız</FormLabel>
                        <Textarea
                          {...field}
                          id="comment"
                          placeholder="Yorumunuzu buraya yazın."
                          h="150px"
                          border="2px"
                          borderColor="gray.400"
                          color="gray.800"
                        />
                        <FormErrorMessage>{form.errors.comment}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                </GridItem>
                <GridItem colSpan={{ md: '2' }}>
                  <Button
                    disabled={isSubmitting}
                    width="full"
                    rounded="full"
                    mt={4}
                    type="submit"
                    colorScheme="yellow"
                  >
                    {message === '' ? 'Yorumu Gönder' : message}
                  </Button>
                </GridItem>
              </Grid>
            </Form>
          </Box>
        )}
      </Formik>
    </>
  );
}

export default CommentForm;
