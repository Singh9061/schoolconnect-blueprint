import { describe, expect, it } from 'vitest';
import { applicationSchema, inquirySchema, validDocument } from '@/lib/school';

const inquiry = { parentName: 'Test Guardian', phone: '', email: 'guardian@example.com', grade: 'Primary', message: 'Please share admission information.', consent: true, website: '' };
const application = { parentName: 'Test Guardian', phone: '9999999999', email: '', studentName: 'Test Student', dob: '2018-01-10', section: 'Primary', address: 'Test address, Pratapgarh', documents: [], consent: true, website: '' };
describe('School submission validation', () => {
  it('accepts an inquiry with email and no phone', () => expect(inquirySchema.safeParse(inquiry).success).toBe(true));
  it('rejects an inquiry without any contact method', () => expect(inquirySchema.safeParse({ ...inquiry, email: '' }).success).toBe(false));
  it('requires consent', () => expect(inquirySchema.safeParse({ ...inquiry, consent: false }).success).toBe(false));
  it('rejects a filled spam trap', () => expect(inquirySchema.safeParse({ ...inquiry, website: 'spam' }).success).toBe(false));
  it('accepts Primary admission', () => expect(applicationSchema.safeParse(application).success).toBe(true));
  it('accepts Upper Primary admission', () => expect(applicationSchema.safeParse({ ...application, section: 'Upper Primary' }).success).toBe(true));
  it('rejects nonexistent calendar dates', () => expect(applicationSchema.safeParse({ ...application, dob: '2018-02-31' }).success).toBe(false));
  it('rejects a future birth date', () => expect(applicationSchema.safeParse({ ...application, dob: '2999-01-01' }).success).toBe(false));
  it('allows documents to be provided during verification', () => expect(applicationSchema.safeParse(application).success).toBe(true));
  it('rejects a claimed PDF without PDF bytes', () => expect(validDocument(new TextEncoder().encode('not a document'), 'application/pdf')).toBe(false));
  it('recognizes PDF bytes', () => expect(validDocument(new TextEncoder().encode('%PDF-1.7'), 'application/pdf')).toBe(true));
});