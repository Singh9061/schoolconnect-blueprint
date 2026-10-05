import { createServerFn } from '@tanstack/react-start';
import { inquirySchema, applicationSchema, validDocument } from './school';
export const submitInquiry=createServerFn({method:'POST'}).inputValidator((input:unknown)=>inquirySchema.parse(input)).handler(async({data})=>{
 const {supabaseAdmin}=await import('@/integrations/supabase/client.server');
 const id=crypto.randomUUID();
 const {error}=await supabaseAdmin.from('contact_submissions').insert({id,parent_name:data.parentName,phone:data.phone,email:data.email,grade:data.grade,message:data.message});
 if(error)throw new Error('Your inquiry could not be saved. Please try again.');
 return {reference:id};
});
export const submitApplication=createServerFn({method:'POST'}).inputValidator((input:unknown)=>applicationSchema.parse(input)).handler(async({data})=>{
 const {supabaseAdmin}=await import('@/integrations/supabase/client.server');
 const id=crypto.randomUUID(); const paths:string[]=[];
 try {
 for(const [index,doc] of data.documents.entries()){
 const bytes=Uint8Array.from(atob(doc.base64),c=>c.charCodeAt(0));
 if(bytes.length>1000000 || !validDocument(bytes,doc.type))throw new Error('Upload a valid PDF, JPG or PNG under 1 MB.');
 const extension=doc.type==='application/pdf'?'pdf':doc.type==='image/png'?'png':'jpg';
 const path=`${id}/${index}.${extension}`;
 const {error}=await supabaseAdmin.storage.from('admission-documents').upload(path,bytes,{contentType:doc.type});
 if(error)throw new Error('Document upload failed. Please try again.'); paths.push(path);
 }
 const {error}=await supabaseAdmin.from('admission_applications').insert({id,parent_name:data.parentName,phone:data.phone,email:data.email,student_name:data.studentName,date_of_birth:data.dob,section:data.section,address:data.address,document_paths:paths});
 if(error)throw new Error('Your application could not be saved. Please try again.');
 return {reference:id};
 }catch(error){if(paths.length)await supabaseAdmin.storage.from('admission-documents').remove(paths);throw error;}
});
