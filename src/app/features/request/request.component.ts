import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RequestService } from './request.service';
import { HttpRequestModel, HttpResponseModel } from './models/request.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
})
export class RequestComponent implements OnInit {
  requestForm: FormGroup;
  response: HttpResponseModel | null = null;
  loading = false;
  error: string | null = null;

  httpMethods = ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'];

  private defaultHeaders = 'Content-Type: application/json';
  private defaultUrl = 'http://localhost:8080';

  constructor(
    private fb: FormBuilder,
    private requestService: RequestService
  ) {
    this.requestForm = this.fb.group({
      url: [ this.defaultUrl, [Validators.required, Validators.pattern('https?://.*')]],
      method: ['GET', Validators.required],
      headers: [this.defaultHeaders],
      body: [''],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.requestForm.valid) {
      this.loading = true;
      this.error = null;
      this.response = null;

      const formValue = this.requestForm.value;
      const request: HttpRequestModel = {
        url: formValue.url,
        method: formValue.method,
        headers: this.parseHeaders(formValue.headers),
        body: this.parseBody(formValue.body),
      };

      this.requestService.sendRequest(request).subscribe({
        next: (response) => {
          this.response = response;
          this.loading = false;
        },
        error: (error) => {
          this.error = error.message;
          this.loading = false;
        },
      });
    }
  }

  private parseHeaders(headersString: string): Record<string, string> {
    const headers: Record<string, string> = {};
    if (!headersString.trim()) {
      return headers;
    }

    try {
      const headerLines = headersString.split('\n');
      headerLines.forEach(line => {
        const [key, value] = line.split(':').map(part => part.trim());
        if (key && value) {
          headers[key] = value;
        }
      });
    } catch (e) {
      console.error('Error parsing headers:', e);
    }
    return headers;
  }

  private parseBody(bodyString: string): any {
    if (!bodyString.trim()) {
      return null;
    }

    try {
      return JSON.parse(bodyString);
    } catch (e) {
      console.error('Error parsing body:', e);
      return bodyString;
    }
  }
}