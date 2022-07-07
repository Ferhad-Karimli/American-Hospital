import { TextInput, Checkbox, Button, Group, Box,Textarea,Select } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useState } from 'react';
import tendersData from "./tenders.json"
import style from "./index.module.css"
import Link from "next/link"
function Form() {

  const [data, setData] = useState(tendersData);
  const form = useForm({
    initialValues: {
      name:"",
      sername:"",
      email: '',
      tenderInfo:"",
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  return (
    <Box sx={{ maxWidth: 300 }} mx="auto">
      <form onSubmit={form.onSubmit((values) => console.log(values))}>

      <TextInput className={style.input} label="Ad" placeholder="Adınız" {...form.getInputProps('name')} />
      
      
      <TextInput label="Soyad" placeholder="Soyadınız" {...form.getInputProps('sername')} />

        
        <TextInput
          required
          label="Email"
          placeholder="nümunə@email.com"
          {...form.getInputProps('email')}
        />
        
        <br/>
        <Select
              // className={`${style.mutalInput} + ${style.location}`}
              label="Müraciət etmək istədiyiniz tenderi seçin"
              data={data}
              placeholder="Tenderi seçin"
              // nothingFound="Nothing found"
              searchable
              creatable
              getCreateLabel={(query) => `+ Create ${query}`}
              onCreate={(query) => setData((current) => [...current, query])}
              {...form.getInputProps("turLocation")}
            />


    
        <br/>

<Textarea
             
              placeholder="Müraciətiniz haqqında ətraflı məlumat yazın"
              autosize
              minRows={24}
              maxRows={8}
              {...form.getInputProps("tenderInfo")}
            />


<Checkbox
          mt="md"
          label="Yuxarıda qeyd etdiyim məlumatları təsdiqləyirəm"
          {...form.getInputProps('termsOfService', { type: 'checkbox' })}
        />

        <Group position="right" mt="md">
          <Button type="submit">Göndər</Button>
        </Group>
       <Link href="/">
        <Group position="right" mt="md">
          <Button type="submit">Əsas səhifə</Button>
        </Group>
        </Link>
      </form>
    </Box>
  );
}
export default Form