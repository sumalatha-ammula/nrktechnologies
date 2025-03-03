import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AlertController, IonContent, IonInput, IonSearchbar, ItemReorderEventDetail } from '@ionic/angular';
import * as Sortable from 'sortablejs';
import { ErrorsService } from '../errors.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpEvent, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Directory, Encoding, Filesystem } from '@capacitor/filesystem';
// const {Filesystem,Storage} = Plugin
@Component({
  selector: 'app-data',
  templateUrl: './data.page.html',
  styleUrls: ['./data.page.scss'],
  standalone:false

})
export class DataPage implements OnInit {
  downloadURl="";

  public iselements:any;
  public date:any;
  public dateandtime:any;
  public istab3=true;
  public selectedOption:any;
  public selectedGroup:any;
  public searchTerm: string = ''; 
  public istext: any;
  public fullname:any;
  public email:any;
  public cadress:any;
  public padress:any;
  public isSubmit=false;
  public treeData: any;
  public checkedItems: string[] = [];
  public activeItem: string='';
  public radio: any=[];
  public selectedvalue:any=""
 public selectedbutton: any;
  public lastClickTime: any;
  doubleClickThreshold: number = 500;
  statuscode: any;
  defaultImagePath: string = 'assets/images.jpg';
  cityMapping: any;
  public states: any=[];
  public relatedcity: any=[];
  public selectedcity: any=[];
   public showButton =false;
  public isDisabled=true;
  public buttonColor: any;
  public promptResult: string="";
  public confirmResult: string="";
  public isclick: any
  public colors: any;
  selectedSingleColor: string | null = null;
  singleInputValue = '';
  filteredSingleColors: string[] = [];
  isSingleDropdownOpen = false;
  public rangevalue:number=50;
  public progress:any=0;
  activeMenus:{ [key in 'main2' | 'sub3']: boolean } = {
    main2: false, // Tracks Main Item 2 submenu
    sub3: false,  // Tracks Sub Item 3 submenu (sub-sub menu)
  };
   

  selectedMultiColors: string[] = [];
  multiInputValue = '';
  filteredMultiColors: string[] = [];
  isMultiDropdownOpen = false;
  public isRunning: any;
  public interval:any;
  public isdate: boolean=false;
  isTab: any;
  public isselect:any;
  isinput: any;
  isselect1: boolean=false;
  isselect121: boolean =false;
  isselect111: boolean =false;
  isselect101: boolean =false;
  isselect12: boolean =false;
  isselect11=false;
  isselect10=false;
  isselect9=false;
  isselect8=false;
  isselect6: boolean=false;
  isselect5: boolean =false;
  isselect4: boolean =false;
  isselect3: boolean =false;
  isselect2: boolean =false;
  isselect7: boolean =false;
  isselect15=false;  
  isselect13=false;
  public regconpass:any;
  formData: any = {};
  public isselect14=false
  public isdrop: boolean=true;
  public isdropable: any;
  public isRegister=false;
  public busername:any;
  public bpassword:any;
  public regname:any;
  public regpass:any;
  public  employees:any=[] 
  public filteredEmployees: any
  public isshowdata: boolean=false;
 public  allData: any=[];
public isshowdata2: boolean=false;
 public items: number[] = [1, 2, 3, 4, 5, 6,7,8,9,10,11,12];
  sortableGrid: any;
  public id:any
  islist: boolean=true
  public isValid: boolean=false;
  public isdisplay: boolean=true;
  public longPressTimeout:any;
  public tapTimeout: any;



  constructor(private alertController: AlertController,
    public error:ErrorsService,
    public activeroute:ActivatedRoute,
    public router:Router,
    private http: HttpClient
  ) {    
    this.date = new Date().toISOString().split('T')[0];
    this.dateandtime = new Date().toISOString();    
   }
   @ViewChild(IonContent, { static: false }) content!: IonContent;
   @ViewChild('userInput', { static: false }) userInput1!: IonInput;
   @ViewChild('userPassword', { static: false }) userPassword1!: IonInput;
   @ViewChild('registerUser', { static: false }) registerUser!: IonInput;
   @ViewChild('registerPassword', { static: false }) registerPassword!: IonInput;
   @ViewChild('registerConfirmpassword', { static: false }) registerConfirmpassword!: IonInput;
   @ViewChild('fullnameInput', { static: false }) fullnameInput!: IonInput;
   @ViewChild('emailInput', { static: false }) emailInput!: IonInput;
   @ViewChild('currentadress', { static: false }) currentadress!: IonInput;
   @ViewChild('permanentadress', { static: false }) permanentadress!: IonInput;



  //  @ViewChild('searchBar', { static: false }) searchBar!: ElementRef;
  @ViewChild(IonSearchbar, { static: false }) searchitem!: IonSearchbar;
  


  
   async ngAfterViewInit() {
    
    if (this.activeItem === 'webTables') {
      this.setSearchbarId();
    }
  }

  ngOnInit() {
    this.id=this.activeroute.snapshot.paramMap.get('id')
    console.log(this.id)
if(this.id=='e'){
  this.iselements='element'
}
if(this.id=='f'){
  this.iselements='forms'
}
if(this.id=='w'){
  this.iselements='widges'
}
if(this.id=='i'){
  this.iselements='interactions'
}
if(this.id=='b'){
  this.iselements='book'
}
if(this.id=='a'){
  this.iselements='alerts'
}
    this.treeData = [
      {
        label: 'Home',
        checked: false,
        expanded: false,
        children: [
          {
            label: 'Desktop',
            checked: false,
            expanded: false,
            children: [
              { label: 'Notes', checked: false },
              { label: 'Commands', checked: false }
            ]
          },
          {
            label: 'Documents',
            checked: false,
            expanded: false,
            children: [
              {
                label: 'WorkSpace',
                checked: false,
                expanded: false,
                children: [
                  { label: 'React', checked: false },
                  { label: 'Angular', checked: false },
                  { label: 'Vue', checked: false }
                ]
              },
              { label: 'Office', checked: false,
                expande:false,
                children:[
                  { label: 'Public ', checked: false },
                  { label: 'Private', checked: false },
                  { label: 'Classified', checked: false },
                  { label: 'General', checked: false }
                ]

               }
            ]
          },
          { label: 'Downloads', checked: false }
        ]
      }
    ];

    this.radio=[
      {

      id:"yesradio",  
      label:"Yes",
      name:"yeslabel"
    },
    {
      id:"imradio",
      label:"Impressive",
       name:"imlabel"
    },
    {
      id:"noradio",
      label:"No",
       name:"nolabel"
    
    }
  ]
  this.states=[
    {
      id:1 ,state:"Texas", name:"Texas", cities:[
        {
        id:1,
        city:"Houston",
        },
        {
          id:2,city: "Austin"
          },
        {
       id:3,city: "Dallas"
                  },
      ]
    },
    {
      id:2 ,state:"California", cities:[
        {
id:1,city:"San Francisco"
        },
        {
          id:2,city: "Los Angeles"
                  },
                  {
                    id:3,city: "San Diego"
                            },
      ]
    },
    {
      id:1 ,state:"New York", cities:[
        {
id:1,city:"Newyork City"
        },
        {
          id:1,city: "Buffalo"
                  },
                  {
                    id:1,city: "Rochester"
                            },
      ]
    },
    {
      id:1 ,state:"Florida", cities:[
        {
id:1,city:"Maimi"
        },
        {
          id:1,city: "Orlando"
                  },
                  {
                    id:1,city: "Tampa"
                            },
      ]
    },
    {
      id:1 ,state:"Illinois", cities:[
        {
         id:1,city:"Peoria"
        },
        {
          id:1,city: "Chicago" 
        },
         {
        id:1,city: "Springfield"
           },
      ]
    }
  ]
  this.colors = [
    'Red', 'Green', 'Blue', 'Yellow', 'Orange', 'Purple', 'Pink', 'Cyan', 'Lime',
    'Indigo', 'Violet', 'Black', 'White', 'Gray',
  ];

  this.employees = [
    { firstName: 'John', lastName: 'Doe', age: 30, email: 'john.doe@example.com', salary: 50000, department: 'Engineering' },
    { firstName: 'Jane', lastName: 'Smith', age: 25, email: 'jane.smith@example.com', salary: 45000, department: 'Marketing' },
    { firstName: 'Bob', lastName: 'Brown', age: 35, email: 'bob.brown@example.com', salary: 60000, department: 'Sales' }
  ];
 this.filteredEmployees=[...this.employees];

  }
  handleReorder(event: CustomEvent<ItemReorderEventDetail>) { 
    console.log('Dragged from index', event.detail.from, 'to', event.detail.to);    
    event.detail.complete();
  }
  setSearchbarId() {
    if (this.searchitem) {
      this.searchitem.getInputElement().then((input) => {
        input.setAttribute('id',"searchInput");
      }).catch((err) => console.error('Error setting ID:', err));
    } else {
      console.error('Searchbar not found');
    }
  }

  doReorder(event: any) {
    const itemToMove = this.items.splice(event.detail.from, 1)[0];
    this.items.splice(event.detail.to, 0, itemToMove);
    event.detail.complete();
  }
  
  elements(item:any){
    this.iselements = this.iselements === item ? null : item;
  }
  
  textbox(){
    this.istext= true;
  }
  submit(){
    this.isSubmit=true;
  }
  toggleNode(node: any) {
    node.expanded = !node.expanded;
  }

  toggleCheckbox(node: any) {
    this.updateChildren(node);
    this.updateCheckedItems();
  }

  updateChildren(node: any) {
    if (node.children) {
      node.children.forEach((child: any) => {
        child.checked = node.checked;
        this.updateChildren(child); 
      });
    }
  }
  updateCheckedItems() {
    this.checkedItems = [];
    this.collectCheckedItems(this.treeData);
  }

  collectCheckedItems(nodes: any[]) {
    nodes.forEach((node) => {
      if (node.checked) {
        this.checkedItems.push(node.label);
      }
      if (node.children) {
        this.collectCheckedItems(node.children); 
      }
    });
  }

  setActiveItem(item: string) {
    this.isRegister=false;
    this.isdisplay=false;
    this.activeItem = item; 
    this.content.scrollToBottom(800); 
    if(this.activeItem=='Dynamic'){
      this.changebutton();
    this.changebutton3();
    }

    if(this.activeItem=="Login"){
      setTimeout(() => {
        const nativeInput = this.userInput1.getInputElement();
        nativeInput.then(input => input.setAttribute('id', 'userInput'));
      });
      setTimeout(() => {
        const nativeInput1 = this.userPassword1.getInputElement();
        nativeInput1.then(input => input.setAttribute('id', 'userPassword'));
      });
    }
    if(this.activeItem=='textbox'){
      setTimeout(() => {
        const nativeInput1 = this.fullnameInput.getInputElement();
        nativeInput1.then(input => input.setAttribute('id', 'fullname'));
      });
      setTimeout(() => {
        const nativeInput1 = this.emailInput.getInputElement();
        nativeInput1.then(input => input.setAttribute('id', 'emaiInput'));
      });
      setTimeout(() => {
        const nativeInput1 = this.currentadress.getInputElement();
        nativeInput1.then(input => input.setAttribute('id', 'currentadress'));
      });
      setTimeout(() => {
        const nativeInput1 = this.permanentadress.getInputElement();
        nativeInput1.then(input => input.setAttribute('id', 'permanentadress'));
      });
   } 
   

  }
  filter(e:any){
    this.radio=e.target.value

  }
  binddata(item:any){
     if(item=='Right'){
      this.selectedbutton="Right click action performed!"
     }
     
     if(item=='Dynamic'){
      this.selectedbutton="Dynamic click action performed!"
     }
     if(item=='Tap'){
      this.selectedbutton="Tap click action performed!"
     }
{

} 
 }
  handleClick() {
    const currentTime = new Date().getTime();
    const tapGap = currentTime - this.lastClickTime;

    if (tapGap < 300 && tapGap > 0) {
      this.selectedbutton="Double click action performed!"
      clearTimeout(this.tapTimeout);
    } else {
      this.tapTimeout = setTimeout(() => {
        console.log('Single Tap Detected (not a double tap)');
      }, 300);
    }

    this.lastClickTime = currentTime;
    // console.log("Hello");
    // const currentTime = new Date().getTime(); 
    // if (currentTime - this.lastClickTime <= this.doubleClickThreshold) {
    //    this.selectedbutton="Double click action performed!"
    // }
    // this.lastClickTime = currentTime;   

  }

  getStatusCodeResponse(item:any){
    if(item=='201'){
      this.statuscode="Link has responded with status 201 and status text"
    }
    if(item=='204'){
      this.statuscode="Link has responded with status 204 and status text"
    }
    if(item=='301'){
      this.statuscode="Link has responded with status 301 and status text"
    }
    if(item=='400'){
      this.statuscode="Link has responded with status 400 and status text"
    }
    if(item=='401'){
      this.statuscode="Link has responded with status 401 and status text"
    }
    if(item=='403'){
      this.statuscode="Link has responded with status 403 and status text"
    }
    if(item=='404'){
      this.statuscode="Link has responded with status 404 and status text"
    }
  }
  downloadDefaultImage() {
    // Create an anchor element dynamically
    const anchor = document.createElement('a');
    anchor.href = this.defaultImagePath; 
    anchor.download = 'images.jpg'; 
    document.body.appendChild(anchor); 
    anchor.click(); // Trigger the download
    document.body.removeChild(anchor); // Clean up the DOM
  }
  displaymain(){
    this.isdisplay=true;
    this.isshowdata=false;
  }
  

  changebutton(){   
    setTimeout(() => {
      this.isDisabled = false;
    }, 5000);    
  }
  changebutton3(){
    setTimeout(() => {
      this.showButton = true;
    }, 5000);
    setTimeout(() => {
      this.buttonColor = 'success'; 
    }, 5000);
  }
  
  selectedstate(id:any){
    
    console.log("id",id)
    this.relatedcity=  this.states.find((e:any)=>e.state==id.target.value);
    this.selectedcity = this.relatedcity.cities;
    
      }  
      openMessageWindow(item) {
        if(item=='w'){
          var newWindow = window.open("", "_blank");         
          if (newWindow) {          
            newWindow.document.write("<h1>This is a sample page</h1>");        }            
          }
          else if(item=='t'){
            this.router.navigateByUrl('/textbox/'+item)
            }
            else if(item=='m'){
              var newWindow1 = window.open("", "_blank");
              if (newWindow1) {
                newWindow1.document.write("<h1>Welcome to the New Window</h1>");        }
            }
      }
      openNewTab() {
      }
    
      openNewWindow() {
      }
       async alert(item:any){
        if(item=='alert'){
          const alert1 = await this.alertController.create({
            header: 'Alert',
            message: 'This is an alert message!',
            buttons: ['OK'],
          });
          await alert1.present();

        }
        if(item=='fsec'){
          setTimeout(async () => {
            const alert2 = await this.alertController.create({
              header: 'Delayed Alert',
              message: 'This alert appeared after 5 seconds!',
              buttons: ['OK'],
            });
            await alert2.present();
          }, 5000);

        }
        if(item=='crm'){
          const alert3 = await this.alertController.create({
            header: 'Confirm',
            message: 'Do you confirm this action?',
            buttons: [
              {
                text: 'Cancel',
                role: 'cancel',
                handler: () => {
                  this.confirmResult = 'You selected Cancel';
                },
              },
              {
                text: 'OK',
                handler: () => {
                  this.confirmResult = 'You selected OK';
                },
              },
            ],
          });
          await alert3.present();
        }
        if(item=='prm'){
          const alert4 = await this.alertController.create({
            header: 'Prompt',
            inputs: [
              {
                name: 'userInput',
                type: 'text',
                placeholder: ' Please Enter something',
                id:'userfullname'
              },
            ],
            buttons: [
              {
                text: 'Cancel',
                role: 'cancel',
                handler: () => {
                  this.promptResult = 'You canceled or left the prompt empty.';
                },
              },
              {
                text: 'OK',
                handler: (data) => {
                  this.promptResult = data.userInput
                    ? `You entered: ${data.userInput}`
                    : 'You canceled or left the prompt empty.';
                },
              },
            ],
          });
          await alert4.present();
        }
        }
        
  isclicked(item:any){
    
      this.isclick=item;
    
  }
  toggleDropdown(type: 'single' | 'multi') {
    if (type === 'single') {
      this.isSingleDropdownOpen = !this.isSingleDropdownOpen;
      this.isMultiDropdownOpen = false;
    } else {
      this.isMultiDropdownOpen = !this.isMultiDropdownOpen;
      this.isSingleDropdownOpen = false;
    }
      }
      filterColors(type: 'single' | 'multi') {
        const inputValue = type === 'single' ? this.singleInputValue : this.multiInputValue;
        const filteredColors = this.colors.filter((color:any) =>
          color.toLowerCase().includes(inputValue.toLowerCase())
        );
        if (type === 'single') {
          this.filteredSingleColors = filteredColors;
        } else {
          this.filteredMultiColors = filteredColors;
        }
      }
    
      selectSingleColor(color: string) {
        this.selectedSingleColor = color;
        this.singleInputValue = '';
        this.filteredSingleColors = [];
        this.isSingleDropdownOpen = false;
      }
    
      removeSingleSelectTag(event: Event) {
        event.stopPropagation();
        this.selectedSingleColor = null;
      }
    
      // Select a multi color
      selectMultiColor(color: string) {
        if (!this.selectedMultiColors.includes(color)) {
          this.selectedMultiColors.push(color);
        }
        this.multiInputValue = '';
        this.filteredMultiColors = [];
      }
    
      // Remove a multi selected color
      removeMultiSelectTag(event: Event, color: string) {
        event.stopPropagation();
        this.selectedMultiColors = this.selectedMultiColors.filter(c => c !== color);
      }
      startFilling() {
        if (this.isRunning) {
          return; 
        }
    
        this.isRunning = true; 
        this.interval = setInterval(() => {
          if (this.progress < 100) {
            this.progress += 1; 
          } else {
            this.progress=0;
            this.stopFilling();
          }
        }, 100); 
      }
      resetRange() {        
        this.stopFilling(); 
    this.isRunning = false;
        
      }
    
      private stopFilling() {
        
        clearInterval(this.interval); 
        this.isRunning = false; 
      }
      toggleSubMenu(menu: 'main2' | 'sub3') {
        this.activeMenus[menu] = !this.activeMenus[menu];
      }
    
      toggleSubSubMenu(subMenu: 'sub3') {
        this.activeMenus[subMenu] = !this.activeMenus[subMenu];
      }    
      isSubMenuVisible(menu: 'main2' | 'sub3'): boolean {
        return this.activeMenus[menu];
      }
    
      isSubSubMenuVisible(subMenu: 'sub3'): boolean {
        return this.activeMenus[subMenu];
      }
      scrollToTop() {
        this.content.scrollToTop(400); 
      }
      datesubmit(){
        this.isdate=true;
      }
      Tab(item:any){
        this.isTab=item;
        this.islist=false;

      }
      slect(item:any){
        this.isselect=item
        if(this.isselect=='1'){
          this.isselect1=!this.isselect1;
        }
        if(this.isselect=='2'){
          this.isselect2=!this.isselect2;
        }
        if(this.isselect=='3'){
          this.isselect3=!this.isselect3;
        }
        if(this.isselect=='4'){
          this.isselect4=!this.isselect4;
        }
        if(this.isselect=='5'){
          this.isselect5=!this.isselect5;
        }
        if(this.isselect=='6'){
          this.isselect6=!this.isselect6;
        }
        if(this.isselect=='7'){
          this.isselect7=!this.isselect7;
        }
        if(this.isselect=='8'){
          this.isselect8=!this.isselect8;
        }
        if(this.isselect=='9'){
          this.isselect9=!this.isselect9;
        }
        if(this.isselect=='10'){
          this.isselect10=!this.isselect10;
        }
        if(this.isselect=='11'){
          this.isselect11=!this.isselect11;
        }
        if(this.isselect=='12'){
          this.isselect12=!this.isselect12;
        }
        if(this.isselect=='13'){
          this.isselect13=!this.isselect13;
        }
        if(this.isselect=='14'){
          this.isselect14=!this.isselect14;
        }
        if(this.isselect=='15'){
          this.isselect15=!this.isselect15;
        }
        if(this.isselect=='101'){
          this.isselect101=!this.isselect101;
        }
        if(this.isselect=='111'){
          this.isselect111=!this.isselect111;
        }
        if(this.isselect=='121'){
          this.isselect121=!this.isselect121;
        }
              }
    
              drop(item:any){
                this.isdropable=item;
                this.isdrop= false;
                
              }
              simple(){
                this.isdrop= true;
                this.isdropable="";
              }
              Tab1(){
                this.islist=true;
                this.isTab="";
              }
              islogin(){
                this.isRegister = true;
                this.activeItem="" 
                this.busername="";
                  this.bpassword="";
                  setTimeout(() => {
                    const nativeInput = this.registerUser.getInputElement();
                    nativeInput.then(input => input.setAttribute('id', 'registerUser'));
                  });
                  setTimeout(() => {
                    const nativeInput1 = this.registerPassword.getInputElement();
                    nativeInput1.then(input => input.setAttribute('id', 'registerPassword'));
                  });
                  setTimeout(() => {
                    const nativeInput2 = this.registerConfirmpassword.getInputElement();
                    nativeInput2.then(input => input.setAttribute('id', 'registerConfirmpassword'));
                  });
              }
              login(){
                this.isValid=true
                if(this.busername !='demo' || this.bpassword !='demo'){
                  this.isValid=false
                  this.error.showErrorToast( "Invalid credentials");
                }
                if(this.busername=='' || this.busername ==undefined){
                  this.isValid=false
                  this.error.showErrorToast("please enter user name");
                }
                if(this.bpassword=='' || this.bpassword ==undefined){
                  this.isValid=false
                  this.error.showErrorToast("please enter password");
                }
                
                if(this.busername =='demo' && this.bpassword =='demo'){
                  this.error.showErrorToast("Login Successful");
                }
                if(this.isValid){
                  this.busername="";
                  this.bpassword="";
                }
                
              }
              backtologin(){
                this.regconpass="";
                this.regpass="";
                this.regname="";
                this.activeItem='Login'
                this.isRegister = false;
                setTimeout(() => {
                  const nativeInput = this.userInput1.getInputElement();
                  nativeInput.then(input => input.setAttribute('id', 'userInput'));
                });
                setTimeout(() => {
                  const nativeInput1 = this.userPassword1.getInputElement();
                  nativeInput1.then(input => input.setAttribute('id', 'userPassword'));
                });
              }
              Register(){
                this.isValid=true               
                          
                if(this.regconpass =='' || this.regconpass == undefined){
                  this.error.showErrorToast("please enter confirmpassword");
                  this.isValid=false
                }                
                if(this.regpass=='' || this.regpass ==undefined){
                  this.isValid=false
                  this.error.showErrorToast("please enter password");
                }  
                if(this.regname=='' || this.regname ==undefined){
                  this.isValid=false
                  this.error.showErrorToast("please enter user name");
                }   
                if(this.isValid){
                  this.regconpass="";
                  this.regpass="";
                  this.regname="";
                  alert("Account Created Successfully")

                }

              }
              filterEmployees() {
                const term = this.searchTerm.toLowerCase();
                this.filteredEmployees = this.employees.filter((employee:any)=> 
                  employee.firstName.toLowerCase().includes(term) || 
                  employee.lastName.toLowerCase().includes(term) ||
                  employee.age.toString().includes(term) ||
                  employee.salary.toString().includes(term) ||
                  employee.department.toLowerCase().includes(term)
                );
              }
              async addform(){
                const alert = await this.alertController.create({
                  header: 'Add Record',
                  inputs: [
                    {
                      name: 'firstName',
                      type: 'text',
                      placeholder: 'First Name',
                      label: 'First Name'
                    },
                    {
                      name: 'lastName',
                      type: 'text',
                      placeholder: 'Last Name',
                    },
                    {
                      name: 'age',
                      type: 'text',
                      placeholder: ' Age',
                    },
                    {
                      name: 'email',
                      type: 'text',
                      placeholder: 'Email',
                    },
                    {
                      name: 'salary',
                      type: 'text',
                      placeholder: 'Salary',
                    },
                    {
                      name: 'department',
                      type: 'text',
                      placeholder: 'Department',
                    },
                  ],
                  buttons: [
                    {
                      text: 'Cancel',
                      role: 'cancel',
                      handler: () => {
                        this.promptResult = 'You canceled or left the prompt empty.';
                      },
                    },
                    {
                      text: 'Submit',
                      handler: (data) => {
                        this.employees.push({
                          firstName: data.firstName,
                           lastName: data.lastName,
                           age: data.age,
                           email: data.email,
                           salary: data.salary,
                           department: data.department,
                        })
                        this.filteredEmployees = [...this.employees];

                      },
                    },
                    
                  ],
                });
                await alert.present();
              }
              async edit(employee:any,i:any){
                const alert = await this.alertController.create({
                  header: 'Edit Record',
                  inputs: [
                    {
                      name: 'firstName',
                      type: 'text',
                      value: employee.firstName,
                      placeholder: 'First Name',
                      id:'userfirstname'

                      
                    },
                    {
                      name: 'lastName',
                      type: 'text',
                      value: employee.firstName,
                      placeholder: 'Last Name',
                      id:'userlastname'
                    },
                    {
                      name: 'age',
                      type: 'text',
                      value: employee.lastName,
                      placeholder: ' Age',
                      id:'age'
                    },
                    {
                      name: 'email',
                      type: 'text',
                      value: employee.email,
                      placeholder: 'Email',
                      id:'usermail'
                    },
                    {
                      name: 'salary',
                      type: 'text',
                      value: employee.salary,
                      placeholder: 'Salary',
                      id:'usersalary'
                    },
                    {
                      name: 'department',
                      type: 'text',
                      value: employee.department,
                      placeholder: 'Department',
                      id:'userdepartment'
                    },
                  ],
                  buttons: [
                    {
                      id:'user-cancel',
                      text: 'Cancel',
                      role: 'cancel',
                      handler: () => {
                        this.promptResult = 'You canceled or left the prompt empty.';
                      },
                    },
                    {
                      text: 'Submit',
                      id:'user-submit',
                      handler: (data) => {
                        this.employees[i]={
                          firstName: data.firstName,
                           lastName: data.lastName,
                           age: data.age,
                           email: data.email,
                           salary: data.salary,
                           department: data.department,
                        }
                        this.filteredEmployees = [...this.employees];

                      },
                    },
                    
                  ],
                });
                await alert.present();

              }
              delete(index:any) {
                this.employees.splice(index, 1);
                this.filteredEmployees = [...this.employees];
                console.log('Record deleted:', this.employees);
              }
              async onSubmit(event: any) {
                event.preventDefault();
                this.isshowdata2=true
                const form = event.target;
                let isValid = true;
                if(form.firstName.value==""|| form.firstName.value=='undefined'){
                  this.error.showErrorToast("Please Enter First Name");
                  isValid = false;
                }
                if(form.lastName.value==""|| form.lastName.value=='undefined'){
                  this.error.showErrorToast("Please Enter Last Name");
                  isValid = false;
                }
                if(form.email.value==""|| form.email.value=='undefined'){
                  this.error.showErrorToast("Please Enter Email");
                  isValid = false;
                }
                if(form.gender.value==""|| form.gender.value=='undefined'){
                  this.error.showErrorToast("Please Mention Gender");
                  isValid = false;
                }
                if(form.mobile.value==""|| form.mobile.value=='undefined' || form.mobile.value.length !=10){
                  this.error.showErrorToast("Please Enter Mobile No and Mobile Number Should be 10 numbers ");
                  isValid = false;
                }
                if(form.dob.value==""|| form.dob.value=='undefined'){
                  this.error.showErrorToast("Please Enter DOB");
                  isValid = false;
                }
                if(form.subjects.value==""|| form.subjects.value=='undefined'){
                  this.error.showErrorToast("Please Enter Subjects");
                  isValid = false;
                }
                if(form.picture.value==""|| form.picture.value=='undefined'){
                  this.error.showErrorToast("Please upload image");
                  isValid = false;
                }
                if(form.currentAddress.value==""|| form.currentAddress.value=='undefined'){
                  this.error.showErrorToast("Please Enter current address");
                  isValid = false;
                }
                if(form.state.value==""|| form.state.value=='undefined'){
                  this.error.showErrorToast("Please Enter State");
                  isValid = false;
                }
                if(form.city.value==""|| form.city.value=='undefined'){
                  this.error.showErrorToast("Please Enter City");
                  isValid = false;
                }
                if(isValid){
                this.formData = {
                  firstName: form.firstName.value,
                  lastName: form.lastName.value,
                  email: form.email.value,
                  gender: form.gender.value,
                  mobile: form.mobile.value,
                  dob: form.dob.value,                
                  subjects: form.subjects.value,
                  hobbies: Array.from(form.hobbies)
                    .filter((checkbox: any) => checkbox.checked)
                    .map((checkbox: any) => checkbox.value),
                  picture: form.picture.files[0]?.name,
                  currentAddress: form.currentAddress.value,
                  state: form.state.value,
                  city: form.city.value,
                };
                this.allData.push({ ...this.formData });
                this.isshowdata2=false;                
                this.activeItem=""
                this.isshowdata=true;

            
                
              }
              else {
                this.isshowdata = false; // At least one validation failed
              }
            }
              closePopup(){
                
                this.activeItem='Practice';
                this.isshowdata=false;
                             this.isshowdata2=false;

              }
              swapItems(index: number) {
                if (index < this.items.length - 1) {
                  const temp = this.items[index];
                  this.items[index] = this.items[index + 1];
                  this.items[index + 1] = temp;
                }
              } 
              private convertBlobToBase64(blob: Blob): Promise<string> {
                return new Promise<string>((resolve, reject) => {
                  const reader = new FileReader();
                  reader.onloadend = () => {
                    resolve(reader.result as string);  // Ensure the result is treated as a string
                  };
                  reader.onerror = reject;  // Reject on error
                  reader.readAsDataURL(blob);  // Convert the Blob to base64 string
                });
              }
              async downloadImage(imageUrl: any) {
                try {
                  const base64Data = await fetch(imageUrl)
                    .then(res => res.blob())
                    .then(blob => this.blobToBase64(blob));
              
                  const fileName = `photo_${new Date().getTime()}.jpg`;
              
                  await Filesystem.writeFile({
                    path: fileName,
                    data: base64Data,
                    directory: Directory.Documents,
                  });
              
                  alert("Photo Downloaded succesfully");
                } catch (error) {
                  console.error('Error saving photo:', error);
                }              
              }


              public blobToBase64(blob: Blob): Promise<string> {
                  return new Promise((resolve, reject) => {
                    const reader = new FileReader();
                    reader.onloadend = () => {
                      resolve(reader.result as string);
                    };
                    reader.onerror = reject;
                    reader.readAsDataURL(blob);
                  });
                }
                startLongPress() {
                  console.log("hello");
                  this.longPressTimeout = setTimeout(() => {
                    this.selectedbutton='Long Press done something '
                    console.log('Long Press Button Pressed');
                  }, 600); // 600ms for long press
                }
              
                endLongPress() {
                  console.log("clear");
                  clearTimeout(this.longPressTimeout);
                }
              
            }
             
    
    


